import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore, collection, addDoc, query, getDocs, limit, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
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

export async function  addComment(name, content) {
  let comment = {
      name: name,
      content: content,
      date: new Date()
  }
  try {
    const docRef = await addDoc(collection(_firestore, "comments"), comment);
    console.log("Document written with ID: ", docRef.id, comment);
    alert('Danke ' + name + ', dein Kommentar wurde hinzugefügt')
  } catch (e) {
    console.error("Error adding document: ", e);
    alert('Sorry ' + name + ', es gab ein Problem: ' + e);
  }
}

export async function getComments() {
  const commentsQuery = query(
    collection(_firestore, 'comments'),
    orderBy('date'),
    limit(10)
  );
  const querySnapshot = await getDocs(commentsQuery);
  let comments = [];
  querySnapshot.forEach(snap  => {
    comments.push(snap.data());
  });
  return comments;
}