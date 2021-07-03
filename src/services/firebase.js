import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAE17-pcM_tNAgmpihBn9-LHqpWJgSM6is",
    authDomain: "chatty-44e0a.firebaseapp.com",
    databaseURL: "https://chatty-44e0a-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();