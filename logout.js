import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, set, ref,onValue,query,remove } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();
console.log(app);
onAuthStateChanged(auth, (user) => {
    if (user) {

      const userID = user.uid;
      console.log(userID);
      document.getElementById("login").style.display="none";
      document.getElementById("signin").style.display="none";
      document.getElementById("logout").style.display="block";
      document.getElementById("logout").addEventListener("click",function(){
        signOut(auth)
        .then(() => {
          const foodRef = ref(database, 'fooditems/'+userID+"newkey/" );
            remove(foodRef)
                window.textContent = ""; 
                window.open("login.html","_parent");
              
        })
        .catch((error) => {
          console.error("Error during logout:", error);
        });


      })
    }
})
