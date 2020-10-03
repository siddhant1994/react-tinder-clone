import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBj0MnsVKnA58pAee5jmq-T8bivOqu6GgY",
    authDomain: "tinder-clone-7d1a3.firebaseapp.com",
    databaseURL: "https://tinder-clone-7d1a3.firebaseio.com",
    projectId: "tinder-clone-7d1a3",
    storageBucket: "tinder-clone-7d1a3.appspot.com",
    messagingSenderId: "349567263369",
    appId: "1:349567263369:web:576bcfe29858a48a615c58",
};
const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();
export default database;
