import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCoLYdICyK7RgzgkRh3NgSuPlnByuhf5ik",
    authDomain: "clock-it-f050d.firebaseapp.com",
    databaseURL: "https://clock-it-f050d.firebaseio.com",
    projectId: "clock-it-f050d",
    storageBucket: "clock-it-f050d.appspot.com",
    messagingSenderId: "784887204153",
    appId: "1:784887204153:web:6b42562ff40b13b24f40e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export default firebase