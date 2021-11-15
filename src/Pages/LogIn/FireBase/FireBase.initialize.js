import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.Config";
const initializeFireBase = () => initializeApp(firebaseConfig);
export default initializeFireBase;