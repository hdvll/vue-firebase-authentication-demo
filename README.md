# Vue & Firebase Authentication Demo

## Set up

Clone project then:

```
npm install
```

## Firebase config

Create a new file in the /src root called "firebaseConfig.js" with your own details. Some of these aren't needed for this project but this is the full object.

```
export default {
  apiKey: '<your key>',
  authDomain: '<your auth domain>',
  databaseURL: '<your database url>',
  projectId: '<your projectId>',
  storageBucket: '<your storage bucket>',
  messagingSenderId: '<your id>',
  appId: '<your id>'
};
```
