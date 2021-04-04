import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBacwMog1hwTDP_aS8qreZHX8cf4MZMITQ",
    authDomain: "skill-dev-cloud.firebaseapp.com",
    databaseURL: "https://skill-dev-cloud-default-rtdb.firebaseio.com",
    projectId: "skill-dev-cloud",
    storageBucket: "skill-dev-cloud.appspot.com",
    messagingSenderId: "42828431492",
    appId: "1:42828431492:web:54815d4350dc4e9ccb82d1",
    measurementId: "G-03G205DHJW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 
