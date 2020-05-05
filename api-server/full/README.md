# A More Full-Featured API Server

A more featured REST API server using Node.js and Express.

## Notes

This project leverages the following dependencies

* **nodemon** - a tool that monitors changes in the project and automatically restart server.
* **express** - an application server development framework for developing an API server.
* **typescript** - written in the TypeScript programming language.
* **@babel/node** - REPL for node.js that compiles code with Babel before running the code.

## Setup

1. Install packages

   ```bash
   $ npm install
   ```

1. Run the program

   ```bash
   $ npm start
   ```

1. Test the endpoints

   ```bash
   $ curl http://localhost:8080
   $ curl --request POST 'http://localhost:9000/signup' \
     --header 'Content-Type: application/json' \
     --data-raw '{
         "email": "john@example.com",
         "password": "password",
         "fullName": "John Lee"
     }'
   ```
