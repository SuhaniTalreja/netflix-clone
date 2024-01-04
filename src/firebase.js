import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMxkkdNxRxcEddC5SO5XhvX98zPzTTfVs",
    authDomain: "netflix-clone2-61b2c.firebaseapp.com",
    projectId: "netflix-clone2-61b2c",
    storageBucket: "netflix-clone2-61b2c.appspot.com",
    messagingSenderId: "780844061038",
    appId: "1:780844061038:web:bf70aceca066abac7a317f"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
