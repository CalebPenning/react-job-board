# React Job Board

## Setting Up Locally
- For organizational purposes, the project is split into two directories:
    1. Backend
    2. Frontend
- The Backend is an Express JSON api that is fully functional outside of the frontend.
- To get it up and running, download or clone this repo, and cd into ./backend
- Make sure you have a postgresql database named "jobly" or whatever name you decide to give your db.
- execute the jobly.sql file to populate your db
- `npm install`
- `node server.js` or `nodemon server.js` for hot reload
- By default, the server runs on localhost:3001
- Use postman, insomnia, cUrl, or another request client to test it out and check the routes.

- Once the server is running, cd into the frontend folder
- This has a seperate package.json, so run `npm install` once again
- Once this is complete, you can run `npm start` to start the React development server.
- Have fun!
