import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD5YQn1VcqHZox1Skkf1l7m2tmFgDWiXmI",
  authDomain: "live-66899.firebaseapp.com",
  projectId: "live-66899",
  storageBucket: "live-66899.appspot.com",
  messagingSenderId: "545678546719",
  appId: "1:545678546719:web:95d718fd66a4d733f6422a"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // this is called singleton pattern
{/*Singleton pattern restricts the instantiation 
of a class and ensures that only one instance of 
the class exists in the Java Virtual Machine */}
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage}