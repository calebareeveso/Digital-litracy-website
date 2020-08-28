import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyDyrduKFO-8NIQQlmu0ii4LglJeSSKoMRo",
    authDomain: "digitalclassroom-cc8f4.firebaseapp.com",
    databaseURL: "https://digitalclassroom-cc8f4.firebaseio.com",
    projectId: "digitalclassroom-cc8f4",
    storageBucket: "digitalclassroom-cc8f4.appspot.com",
    messagingSenderId: "586634338045",
    appId: "1:586634338045:web:605837866f60e7a5d22894",
    measurementId: "G-Y5CGL4SCVX"
  };
const fire =  firebase.initializeApp(Config);
export default fire;
    