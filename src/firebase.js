import firebase from "firebase/app"
import "firebase/auth";
import "firebase/database";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyAF4gWBIYpa4Xzl_83G2H58aWg_68Q5MvI",
    authDomain: "slack-clone-b9648.firebaseapp.com",
    databaseURL: "https://slack-clone-b9648.firebaseio.com",
    projectId: "slack-clone-b9648",
    storageBucket: "//slack-clone-b9648.appspot.com",
    messagingSenderId: "6753275216",
    appId: "1:6753275216:web:b2653dcd945201490a3055",
    measurementId: "G-KQQRLC912T"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;