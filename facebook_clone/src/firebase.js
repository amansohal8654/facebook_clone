import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBU3OKmYqc64pBQmtGRQBsUm5FA1MKvI3k",
  authDomain: "facebook-clone-8c838.firebaseapp.com",
  databaseURL: "https://facebook-clone-8c838.firebaseio.com",
  projectId: "facebook-clone-8c838",
  storageBucket: "facebook-clone-8c838.appspot.com",
  messagingSenderId: "633312328622",
  appId: "1:633312328622:web:07732977607ff721b9263f",
  measurementId: "G-RXTRZ9D9TV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export{provider, auth};
  export default db;