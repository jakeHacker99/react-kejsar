import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC49iR_RNWHIzUpV1bbRTum5fLPClyJJ6w",
  authDomain: "kejsar-app.firebaseapp.com",
  projectId: "kejsar-app",
  storageBucket: "kejsar-app.appspot.com",
  messagingSenderId: "330860834112",
  appId: "1:330860834112:web:9fd578a59035e06fe75ea5",
  measurementId: "G-LVD7MEXG3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
export default db;
