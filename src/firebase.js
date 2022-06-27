import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "personal-portfolio-e3e1e.firebaseapp.com",
  projectId: "personal-portfolio-e3e1e",
  storageBucket: "personal-portfolio-e3e1e.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export {db  ,storage}

