# Trash

An IoT device that introduces a new information stream to households to incentivize sustainable consumption

### Prerequisites

-   Node.js
-   npm
-   MongoDB
-   Redis

### Environment Variables

Create a `.env` file under `server/` with the following contents

```
PORT=3000
db_connection_url=mongodb://localhost/garbage
```

Starting the Express server with

```
$ npm run dev
```

will load the environmental variables from `.env` into the process.

### How to Run

Install server packages

```
$ cd server
$ npm i
```

Install client packages

```
$ cd web
$ npm i
```

Start MongoDB

```
$ sudo mongod
```

Start Redis (session cache)

```
$ redis-server
```

Start the Express server

```
$ cd server
$ npm run dev
```

Start the React server

```
$ cd web
$ npm start
```
