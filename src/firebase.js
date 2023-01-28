import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-wtTNyahIYzzqVrDnZBxrGgGHgdQDsU8",
    authDomain: "netflix-clone-7f0fa.firebaseapp.com",
    projectId: "netflix-clone-7f0fa",
    storageBucket: "netflix-clone-7f0fa.appspot.com",
    messagingSenderId: "354853728422",
    appId: "1:354853728422:web:3631f2d36862d075a6c467"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { auth };
  export default db;