import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "حط apiKey ديالك هنا",

authDomain: "purestepfunding.firebaseapp.com",

projectId: "purestepfunding",

storageBucket: "purestepfunding.appspot.com",

messagingSenderId: "حط messagingSenderId ديالك هنا",

appId: "حط appId ديالك هنا"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
