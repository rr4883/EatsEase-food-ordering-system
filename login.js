
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCQ8mvmAJN96qU6iJJbRx225KCBGRu0a8g",
    authDomain: "food-ordering-dc6ff.firebaseapp.com",
    databaseURL: "https://food-ordering-dc6ff-default-rtdb.firebaseio.com",
    projectId: "food-ordering-dc6ff",
    storageBucket: "food-ordering-dc6ff.appspot.com",
    messagingSenderId: "393472271268",
    appId: "1:393472271268:web:990d9517b9b9fb68ffd731",
    measurementId: "G-ER300XNPEL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  console.log(app);
  document.getElementById("login").addEventListener("click",function()
   {
        var email = document.getElementById("email1").value;
        var password = document.getElementById("password1").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Welcome "+ email);
        {
            window.open("index.html","_parent");
        }
      })
   
      .catch((error) => {
         alert(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
  
  
     })
    })