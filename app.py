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
    ROOMS[data.name] = data.name
    join_room(id)
    emit('joinedRoom', {'room': id})


if __name__ == '__main__':
    socketio.run(app)
