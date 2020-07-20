import firebase from 'firebase/app'
import 'firebase/auth'
// The configuration below is not sensitive data.
const firebaseConfig = {
    apiKey: "hyu",
    authDomain: "vpns-dev-me.firebaseapp.com",
    databaseURL: "https://vpns-dev-me.firebaseio.com",
    projectId: "vpns-dev-me",
    storageBucket: "vpns-dev-me.appspot.com",
    messagingSenderId: "248759499459",
    appId: "1:248759499459:web:6b123e216e3f09c3884076",
    measurementId: "G-GQZGFTC1WB"
};
firebase.initializeApp(firebaseConfig)
