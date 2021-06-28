import firebase from "firebase";

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = firebase.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, providerGoogle, providerFacebook };
