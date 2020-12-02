import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOADXTgIAlAb6bbMqroLczDZtv3bAiAtI",
  authDomain: "crwn-db-911bc.firebaseapp.com",
  databaseURL: "https://crwn-db-911bc.firebaseio.com",
  projectId: "crwn-db-911bc",
  storageBucket: "crwn-db-911bc.appspot.com",
  messagingSenderId: "129299200625",
  appId: "1:129299200625:web:a17f5b934ea59d1d5c39d0",
  measurementId: "G-9SJ5CZGHHQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
