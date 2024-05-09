import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAr0gF8uBtR6aaCU5e00Kv7kSOawmUS6DM",
    authDomain: "to-do-list-1f5ee.firebaseapp.com",
    projectId: "to-do-list-1f5ee",
    storageBucket: "to-do-list-1f5ee.appspot.com",
    messagingSenderId: "861126279325",
    appId: "1:861126279325:web:1791e93cf42b82159c9474",
    measurementId: "G-M9M7QRLJ6D"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);