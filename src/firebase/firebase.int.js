import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase.config.js/firebase.config";


const initilazieAuthentication = () => {
    initializeApp(firebaseConfig);
};


export default initilazieAuthentication;