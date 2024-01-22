import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRZO4ndnDH0W2RC_tM9GHT1nRrPTw3A38",
  authDomain: "house-hunter-9ed89.firebaseapp.com",
  projectId: "house-hunter-9ed89",
  storageBucket: "house-hunter-9ed89.appspot.com",
  messagingSenderId: "919715787872",
  appId: "1:919715787872:web:07c13e2923c245a14a7f05",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
