import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJufw1ryw1oAGHLF8a6XiQmESCki9LjVU",
  authDomain: "liva-3ec01.firebaseapp.com",
  projectId: "liva-3ec01",
  storageBucket: "liva-3ec01.appspot.com",
  messagingSenderId: "633786633550",
  appId: "1:633786633550:web:9219e3df051f788548221f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = firebase.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, providerGoogle, providerFacebook };
