# Headless Chrome

## Installation

Headless Chrome requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd HeadlessNavigator
npm install
npm start
```

In the Postman collection :
```sh
pm.globals.set("autoRun",true);
pm.globals.set("Headless",true);
```
These settings allow you to activate the automatic mode, or the headless mode.
By disabling the automatic mode, the call to the server node is disabled in Postman.
By disabling the headless mode, the call to the server will be made, and a new browser will open. This mode allows you to see the actions performed. It also allows debugging.
By activating both parameters, the headless mode is activated and all actions are played in the background without interrupting the user.
