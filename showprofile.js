import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase,ref,onValue} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

   onAuthStateChanged(auth, (user) => {
    if (user) {
      const userID = user.uid;  
      console.log("hello");
      const rope = ref(database, 'food_ordering/' + userID);
      document.getElementById("profileimage").style.display = "block";
  
      onValue(rope, (snapshot) => {
        const ropedata = snapshot.val();
  
        if (ropedata) {
          const client = ropedata; // Since you're fetching data for the logged-in user
          const name = client.fname;
          const emailid = client.email;
          const mobile = client.mobile;
          
  
          document.getElementById("profname").innerHTML = name;
          document.getElementById("proemail").innerHTML = emailid;
          document.getElementById("promobile").innerHTML = mobile;
  
          document.getElementById("profileimage").addEventListener("click", function() {
            document.getElementById("profbox").style.display = "block";
            document.getElementById("profileimage").style.display = "none";
          });
  
          document.getElementById("profileimage1").addEventListener("click", function() {
            document.getElementById("profbox").style.display = "none";
            document.getElementById("profileimage").style.display = "block";
          });
        }
      });
    } else {
      console.log("No data available");
    }
  });
  