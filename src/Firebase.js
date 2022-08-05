// import firebase from 'firebase';
// import db from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP2hkyd4uxaAzmPKDUnMqzk43sF-WBSBc",
  authDomain: "clone-8d020.firebaseapp.com",
  projectId: "clone-8d020",
  storageBucket: "clone-8d020.appspot.com",
  messagingSenderId: "716007737467",
  appId: "1:716007737467:web:6d7f6ec2d1da1660d17ade",
  measurementId: "G-9RWYSB9G72"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};