

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
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
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const auth = getAuth();
  console.log(app);
  document.getElementById("id1").addEventListener("click",function()
   {
        var fname = document.getElementById("name").value;
    
        var mobile = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        set(ref(database, 'food_ordering/' + user.uid),
    {
        fname: fname,
        
        mobile: mobile,
        email: email,
        password: password
    })


    .then( () =>{
        console.log("done");
        alert("Signup Succesfull!!")
        {
        window.open("login.html","_parent");
        }

})
    .catch( () =>{
        
    alert(error);
});

    })
    .catch((error) => {
        alert(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  
});
