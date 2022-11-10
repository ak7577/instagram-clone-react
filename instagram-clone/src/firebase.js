
  import firebase from "firebase";
  const firebaseApp =firebase.initializeApp({

    apiKey: "AIzaSyAu-mfTs4wmCn1kCrK3gcn5dP9msqGCzkY",
    authDomain: "instagram-clone-react-ebc98.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-ebc98.firebaseio.com",
    projectId: "instagram-clone-react-ebc98",
    storageBucket: "instagram-clone-react-ebc98.appspot.com",
    messagingSenderId: "553631480813",
    appId: "1:553631480813:web:58d7666fdde39b605c85e4",
    measurementId: "G-XRSXJYGTP6"


  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  export {db, auth, storage};
 
  