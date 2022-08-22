import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCjKlnKOyHCuvjyIfc3b1b4r4NACfMoBok",
  authDomain: "blogit-2a1ba.firebaseapp.com",
  projectId: "blogit-2a1ba",
  storageBucket: "blogit-2a1ba.appspot.com",
  messagingSenderId: "788276680693",
  appId: "1:788276680693:web:fdca626b7354ff0b0132bc",
  measurementId: "G-497MZ50NRY"
};

export const SignInWithGoogle = () => { 
  
  signInWithPopup(auth,provider)
  .then((re => {
    console.log(re)
    const name = re.user.displayName;
    const email = re.user.email;
    const image = re.user.photoURL;
    
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("image",image)
    localStorage.setItem("isAuth",true)
     
    }))
    .catch((err) => (console.log(err))); 
}
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

