import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAujP57YOQe3surqWbzNrYo4QIyJVhn7QQ",
  authDomain: "disney-cl-7c628.firebaseapp.com",
  projectId: "disney-cl-7c628",
  storageBucket: "disney-cl-7c628.appspot.com",
  messagingSenderId: "664224922075",
  appId: "1:664224922075:web:37c56c9cc3ffe0f8e08ffe",
  measurementId: "G-JZ6CB6KFKP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
export default db;
