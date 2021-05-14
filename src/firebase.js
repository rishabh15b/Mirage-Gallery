import  firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBj0cataTeXIGvsH-RyvLclF6MKI2olBFQ",
    authDomain: "mirage-gallery-ietlucknow.firebaseapp.com",
    projectId: "mirage-gallery-ietlucknow",
    storageBucket: "mirage-gallery-ietlucknow.appspot.com",
    messagingSenderId: "379845902232",
    appId: "1:379845902232:web:6f8c5ae12e897765a8f5ed",
    measurementId: "G-C6QWMMRGWT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};
export {auth, provider};