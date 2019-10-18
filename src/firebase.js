import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCYkFsBI74gBqQ3qX_pfhS6JQCqxk2y3yY",
    authDomain: "first-flight-6df89.firebaseapp.com",
    databaseURL: "https://first-flight-6df89.firebaseio.com",
    projectId: "first-flight-6df89",
    storageBucket: "first-flight-6df89.appspot.com",
    messagingSenderId: "335955122918",
    appId: "1:335955122918:web:bac3b0f794fdd559b4f927",
    measurementId: "G-T94QP8ZXHF"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();