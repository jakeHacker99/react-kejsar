import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvKjml4xO81GclcKZ4qacoPTQ_DZJa0Qo",
  authDomain: "kejsar-36784.firebaseapp.com",
  projectId: "kejsar-36784",
  storageBucket: "kejsar-36784.appspot.com",
  messagingSenderId: "329557871414",
  appId: "1:329557871414:web:b55c0e27b90cfeb036c197",
  measurementId: "G-FXD0T4GKZ6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
export default db;
