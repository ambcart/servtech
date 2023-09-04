
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBDfbVacVdJWfjRsnaO0--LRzWf5mOAB4w",
    authDomain: "formlogin-3b3dc.firebaseapp.com",
    projectId: "formlogin-3b3dc",
    storageBucket: "formlogin-3b3dc.appspot.com",
    messagingSenderId: "202249687440",
    appId: "1:202249687440:web:dda6b9aa48dc52a327e315"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


document.getElementById("reg-btn").addEventListener('click',function(){
document.getElementById("register-div").style.display="inline";
document.getElementById("login-div").style.display="none";


});

document.getElementById("log-btn").addEventListener('click',function(){
document.getElementById("register-div").style.display="none";
document.getElementById("login-div").style.display="inline";

});











document.getElementById("login-btn").addEventListener('click',function(){
const loginEmail=document.getElementById("login-email").value;
const loginPassword=document.getElementById("login-password").value;

signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"Was Login Successfully";
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry! <br>"+errorMessage;

  });




});

  document.getElementById("register-btn").addEventListener('click',function(){
    const registerEmail=document.getElementById("register-email").value;
    const registerPassword=document.getElementById("register-password").value;
    
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+"Was Registered Successfully";
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("register-div").style.display="none";
        document.getElementById("result").innerHTML="Sorry! <br>"+errorMessage;
    
      });




});
document.getElementById("log-out-btn").addEventListener('click',function(){
    signOut(auth).then(() => {
       
      document.getElementById("result-box").style.display="none";
      document.getElementById("login-div").style.display="inline";


      }).catch((error) => {
       document.getElementById("result").innerHTML="Sorry! <br>"+errorMessage;
      });


});



