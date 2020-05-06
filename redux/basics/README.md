# Redux

Every application has a set of states that it manages and can be changed depending on the inputs and internal changes in the application. Redux is a state container and programming model for JavaScript applications. 

Redux is typically used in a web application, especially one that is built in React. Redux serves as a central state container for the entire application and each UI component independently initiates actions, which gets in turn asynchronously changes the UI and data state via reducers and subscribers.

This recipe implements a simple chat app that uses the terminal to prompt the user to simulate a construction of a chat message. The action of "sending" the message dispatches an event in the Redux store that would be picked up by the reducer and subscriber. This is a super simple app that illustrates the relationships among actions, reducers, and subscribers/app. 

## Notes

We are using the npm package `readline-sync` to implement a synchronous user input flow by blocking the execution when the program prompts the user for an input. The `readline` module from the standard node module is asynchronous.

## Setup

1. Install packages

   ```bash
   $ npm install
   ```
   
1. Run the program

   ```bash
   $ npm start
   ```

## Sample Code

* [Main](index.js)

## References

* [Redux](https://redux.js.org/)
