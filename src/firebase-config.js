import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrbgBPJRU-cvRmtwnCy-HayZPi5ul-3jE",
    authDomain: "photo-store-fd99f.firebaseapp.com",
    databaseURL: "https://photo-store-fd99f.firebaseio.com",
    projectId: "photo-store-fd99f",
    storageBucket: "photo-store-fd99f.appspot.com",
    messagingSenderId: "1091268010305",
    appId: "1:1091268010305:web:55374ae0e3db7ada4701c0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
