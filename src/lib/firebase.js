import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDy2cyCRA97quBqxRJhDUkUiVWxndar0xQ",
  authDomain: "instagram-clone-2738c.firebaseapp.com",
  projectId: "instagram-clone-2738c",
  storageBucket: "instagram-clone-2738c.appspot.com",
  messagingSenderId: "9779505480",
  appId: "1:9779505480:web:e64f49d40941ff82196b7d",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
