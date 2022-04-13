import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDN4aKnCCwLNTUpd3HZpkic4R4inezkTJg',
  authDomain: 'traumbetrieb-fbdfc.firebaseapp.com',
  projectId: 'traumbetrieb-fbdfc',
  storageBucket: 'traumbetrieb-fbdfc.appspot.com',
  messagingSenderId: '600514293140',
  appId: '1:600514293140:web:7beb8323663b67d8b7f381',
  measurementId: 'G-CEMLKQK35B',
};

const _application = initializeApp(firebaseConfig);
const _firestore = getFirestore(_application);
const _fireAuth = getAuth(_application);

onAuthStateChanged(_fireAuth, (user) => {
  if (user != null) {
    console.log('logged: ', user);
  } else {
    console.log('not yet logged');
  }
});
