import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB8Xcj2rr73rhj5P2I83gfO9_daZ1sTc38",
    authDomain: "polifinity-9c5a2.firebaseapp.com",
    projectId: "polifinity-9c5a2",
    storageBucket: "polifinity-9c5a2.appspot.com",
    messagingSenderId: "757348788591",
    appId: "1:757348788591:web:8ab15e16084b83cb74e09a"
};



firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export {projectFirestore};
