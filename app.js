// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz-vXANkisu2HyRWl9AOrkA48XoitUR10",
    authDomain: "sign-up-form-e16f3.firebaseapp.com",
    projectId: "sign-up-form-e16f3",
    storageBucket: "sign-up-form-e16f3.appspot.com",
    messagingSenderId: "383303499948",
    appId: "1:383303499948:web:4e07e011ddaf40f3335f09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// console.log(app);
// console.log(auth);
let button = document.getElementById('login')
function login(){

  
  let userEmail =document.getElementById('email').value
  let userPassword =document.getElementById('password').value
  
  createUserWithEmailAndPassword(auth,userEmail,userPassword)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user ====>" , user);
    window.location.href='login.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("======",errorCode);
  });
  
  
}
button.addEventListener('click',login)
  
//   signInWithEmailAndPassword(auth, userEmail, userPassword)
//     .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log("singin=====",user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//   });

// }
// button.addEventListener('click',login)