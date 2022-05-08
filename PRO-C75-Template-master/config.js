import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA_Y9kfQ7kT_SUb7a-f2S7JG4sfzgLQ1Hc",
  authDomain: "e-ride-5eec3.firebaseapp.com",
  projectId: "e-ride-5eec3",
  storageBucket: "e-ride-5eec3.appspot.com",
  messagingSenderId: "778857533685",
  appId: "1:778857533685:web:34e69b47f55e9b21b735bc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
