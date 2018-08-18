from flask import Flask, render_template
from flask_socketio import SocketIO, join_room, emit

app = Flask(__name__)
socketio = SocketIO(app)
ROOMS = {}


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('create')
def on_create(data):
    pass


@socketio.on('createRoom')
def handle_create(data):
    print('create data', data)
    if data['code'] not in ROOMS:
        if data['role'] == 'ADMIN':
            print('setting up room', data['state'])
            ROOMS[data['code']] = data['state']
        join_room(data['code'])
        emit('createdRoom', {'room': data['code']})

@socketio.on('joinRoom')
def handle_join(data):
    print('join data', data)
    if data['code'] in ROOMS:
        join_room(data['code'])
        emit('joinedRoom', {'code': data['code'], 'state': ROOMS[data['code']]})


if __name__ == '__main__':
    socketio.run(app)
