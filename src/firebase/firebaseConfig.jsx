
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyCWf0125Eo3-B4r9Ji2jQiAFCUcnHaZ72c",
  authDomain: "redux-7c75e.firebaseapp.com",
  projectId: "redux-7c75e",
  storageBucket: "redux-7c75e.appspot.com",
  messagingSenderId: "790604957895",
  appId: "1:790604957895:web:a6c9f2e752327a4ec6d6e2",
  measurementId: "G-TR5KFY4MSJ"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);