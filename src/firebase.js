import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAr9IEL0ylviKTPflup9A39883GM5EGMxQ",
  authDomain: "project1-d9e1a.firebaseapp.com",
  projectId: "project1-d9e1a",
  storageBucket: "project1-d9e1a.appspot.com",
  messagingSenderId: "776904102098",
  appId: "1:776904102098:web:8c826b983a51aa65d75d0b",
  measurementId: "G-D9WPYHYJ0R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Enable offline persistence for instant loading and drastically reduced network latency
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };