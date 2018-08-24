# RPG Map
### Inspiration
This app was inspired by my cousins. We did a D&D game through Discord and needed a quick way to visualize placement for battle.

After some discussion, I determined making an app would be a fun challenge.

### React
The Front-end part of the app is in the client folder. To run:

1. Go to the client folder.
2. Run `yarn install`. You can use NPM, but YMMV.
3. Run `yarn start`.

This will set the React app to run at `localhost:3000`.

### Flask
The Back-end part of the app is in the root folder. To run:

* I suggest setting up a virtualenv. This isolates the app and is typical python practice. This app uses Python 3.
This assumes you created an env folder through virtualenv.

1. Source your virtual env: `source env/bin/activate`. If using the fish shell: `source env/bin/activate.fish`.
2. Install the packages needed: `pip install -r requirements.txt`
3. Run the app. For dev: `python app.py`. For a more production like feel: `FLASK_APP=app.py flask run`.

### Contributing
If you would like to help, please do. Open a pull request and we'll see if we can't incorporate your work.
