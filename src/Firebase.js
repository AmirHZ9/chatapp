import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';


export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyChrgaK5gQ_eCpWEH6oY2pZ4SA4Czx2Obw",
    authDomain: "chatapp-6f14f.firebaseapp.com",
    projectId: "chatapp-6f14f",
    storageBucket: "chatapp-6f14f.appspot.com",
    messagingSenderId: "776791768608",
    appId: "1:776791768608:web:ac65fbdc1de1a373e54645"
  }).auth();