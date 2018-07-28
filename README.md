# RPG Map

## About
This repository is for the development of a sharable RPG Map to help players visualize the field in a role playing game.

## Development

### Server
In the root of the repo, run `python app.py`. This will start the Flask server which exposes a websocket

### Client
In the client folder, run `yarn start` or `npm start` depending on which package manager you use.


### Goals
One user (GM) sets up a room with a map given a width and height. He sets up the map using icons for characters.

Other users join using the room code. They place their character on the board.

At this point, anyone can drag and drop their character onto the board. GM can accept/reject this move. GM can drag and drop any icon on the board.
