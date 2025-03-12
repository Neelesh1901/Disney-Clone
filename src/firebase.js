import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore compatibility library
import "firebase/compat/auth"; // Import Auth compatibility library
import "firebase/compat/storage"; 
const firebaseConfig = {

    apiKey: "AIzaSyDM9UQ25TM70S4PXKANBSJLVfMZkUK9wrc",
  
    authDomain: "disney-clone-e637d.firebaseapp.com",
  
    projectId: "disney-clone-e637d",
  
    storageBucket: "disney-clone-e637d.firebasestorage.app",
  
    messagingSenderId: "770308917511",
  
    appId: "1:770308917511:web:ba8379e4d236a52e019da2"
  
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // Initialize Firestore
const auth = firebase.auth(); // Initialize Authentication
const provider = new firebase.auth.GoogleAuthProvider(); // Google Auth provider
const storage = firebase.storage(); // Initialize Storage
  
  export { auth, provider, storage };
  export default db;
