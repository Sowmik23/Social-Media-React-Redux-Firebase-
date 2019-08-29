import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_ProXx43Wc6xkNTYK0DbtnkxYOvSdIF0",
    authDomain: "sowmik-media.firebaseapp.com",
    databaseURL: "https://sowmik-media.firebaseio.com",
    projectId: "sowmik-media",
    storageBucket: "",
    messagingSenderId: "61821021517",
    appId: "1:61821021517:web:20c7e9303f4a5e68"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase