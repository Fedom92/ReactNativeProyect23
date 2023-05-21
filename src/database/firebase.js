import firebase from 'firebase'

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCzKA4DOxF8F4FQjTIG-ZZQgKQat4k0tII",
    authDomain: "distribuapp-10e39.firebaseapp.com",
    projectId: "distribuapp-10e39",
    storageBucket: "distribuapp-10e39.appspot.com",
    messagingSenderId: "821032442206",
    appId: "1:821032442206:web:1845fe576cecff3c9697cf"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default {
    firebase,
    db,
}