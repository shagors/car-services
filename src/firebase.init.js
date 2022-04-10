// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnmBZ4qK89UNzpTicYwWL-AkSovdN2HEU",
    authDomain: "car-services-3391b.firebaseapp.com",
    projectId: "car-services-3391b",
    storageBucket: "car-services-3391b.appspot.com",
    messagingSenderId: "525953649930",
    appId: "1:525953649930:web:7cbd8ad16eda074e8f7ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;