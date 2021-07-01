import firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyCzgA47NKltlbpax6eLI6fSBXuJYg5J4E0",
    authDomain: "fir-36d5d.firebaseapp.com",
    projectId: "fir-36d5d",
    storageBucket: "fir-36d5d.appspot.com",
    messagingSenderId: "751546493629",
    appId: "1:751546493629:web:3d4858873200b8bc8ee5d4",
    measurementId: "G-TM71WTLWD9"
  };


 export const Firebase=firebase.initializeApp(firebaseConfig);