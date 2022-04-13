// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRd5eiMB3JL9oA_l66_SBqS9LRgpgWREs",
  authDomain: "whatsapp-clone-231b5.firebaseapp.com",
  projectId: "whatsapp-clone-231b5",
  storageBucket: "whatsapp-clone-231b5.appspot.com",
  messagingSenderId: "930597818786",
  appId: "1:930597818786:web:4324c527dae8ba01d322fb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
