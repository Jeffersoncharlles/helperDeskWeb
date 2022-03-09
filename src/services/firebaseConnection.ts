import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAL0i4LyBeU1Lp7b655w7HpsadCnfWITtU",
    authDomain: "helperdesk-59688.firebaseapp.com",
    projectId: "helperdesk-59688",
    storageBucket: "helperdesk-59688.appspot.com",
    messagingSenderId: "791202362469",
    appId: "1:791202362469:web:a7c1bcaf339a16436e028c",
    measurementId: "G-EM1TN94H19"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;