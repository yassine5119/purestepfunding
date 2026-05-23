import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/* ===== FIREBASE CONFIG ===== */

const firebaseConfig = {

apiKey: "AIzaSyAn1LPLNf0KATbO6Lks4Wupehe0T5yyIEM",

authDomain: "purestep-576a1.firebaseapp.com",

projectId: "purestep-576a1",

storageBucket: "purestep-576a1.appspot.com",

messagingSenderId: "103788045871",

appId: "1:103788045871:web:b8002a5d90deb6616d48da"

};

/* ===== INITIALIZE ===== */

const app = initializeApp(firebaseConfig);

/* ===== SERVICES ===== */

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

/* ===== EXPORT ===== */

export {

auth,
db,
storage

};
