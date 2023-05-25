import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCzKA4DOxF8F4FQjTIG-ZZQgKQat4k0tII",
    authDomain: "distribuapp-10e39.firebaseapp.com",
    projectId: "distribuapp-10e39",
    storageBucket: "distribuapp-10e39.appspot.com",
    messagingSenderId: "821032442206",
    appId: "1:821032442206:web:1845fe576cecff3c9697cf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)