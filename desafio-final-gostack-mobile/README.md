# Meetapp

This is the android version using react-native from meetapp. Used for certification on bootcamp by Rocketseat.

## Installation

Make sure you already have react-native installed, you can read documentation before get started. Then use the package manager for install dependencies then run metro builder.

```bash
yarn
react-native run-android
```

## API
The api runs on ``http://localhost:3333`` you can change it on ``src/services/api.js`` if you have an issues to get data from api on you device you can run on command line ``adb reverse tcp:3333 tcp:3333``