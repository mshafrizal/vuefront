import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDy_6-SkTCgp2rL-J7E8tJhntRM0E2uFv8",
    authDomain: "kossan-98ef5.firebaseapp.com",
    databaseURL: "https://kossan-98ef5.firebaseio.com",
    projectId: "kossan-98ef5",
    storageBucket: "kossan-98ef5.appspot.com",
    messagingSenderId: "80285488008",
    appId: "1:80285488008:web:99fe7c2bd36f23807ae03d",
    measurementId: "G-8L5KPTBDZ6"
};

export const firebaseInstance = initializeApp(firebaseConfig)
