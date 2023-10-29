import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, set, ref,query,onValue } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userID = user.uid;
      console.log(userID);
      const itemsref= ref(database, 'fooditems/'+userID+"newkey/");
      const itemsQuery = query(itemsref);
      const names = [];
      const qtys=[];
      const prices=[];
      var pricesOfFoods = [];
      var qtysOfFoods=[];

        // data retrive section----->
      onValue(itemsQuery, (snapshot) => {
        const itemdata = snapshot.val();
        if (itemdata) {
          Object.keys(itemdata).forEach((itemID) => {
            const foods = itemdata[itemID];
            const name = foods.name;
            const qty = foods.qty;
            const price = foods.price;
            names.push(name);
            qtys.push(qty);
            prices.push(price);

            document.getElementById("f1").innerHTML += name + "<br>";
            document.getElementById("q1").innerHTML += qty + "<br>";
            document.getElementById("p1").innerHTML += price + "<br>";


            let total=0;
            let totalamt=0;
            for (var i = 0; i < prices.length; i++) {
                var priceString = prices[i];
                var match = priceString.match(/\d+/); // Extract the numeric part of the string
                var priceOfFood = match ? parseInt(match[0], 10) : NaN; // Convert to an integer
                // Add to the array
                var priceString1=qtys[i];
                var match1= priceString1.match(/\d+/);
                var qtyoffood=match1 ? parseInt(match1[0], 10) : NaN;
               
            }
            pricesOfFoods.push(priceOfFood);
            qtysOfFoods.push(qtyoffood);
            var abc=[];           
            abc.push(qtysOfFoods);
            
            let cde = 0;
            for (let i = 0; i < pricesOfFoods.length; i++) {
                cde += pricesOfFoods[i] * qtysOfFoods[i];
                
            }
            console.log(cde);
            document.getElementById("finalamt").innerHTML=cde;

          });
        }
        document.getElementById("pay").addEventListener("click",function(){
          alert("Successfully paid!!")
          {
            window.open("index.html","_parent");
          }

        })
      });
}
})

    