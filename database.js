
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
      document.getElementsByClassName("addbutton")[0].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname0").textContent;
        var foodCost = document.getElementById("cost0").textContent;
        var foodquantity = document.getElementById("quantity-input").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[1].addEventListener("click",function()
    {function generateUniqueKey() {

        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname1").textContent;
        var foodCost = document.getElementById("cost1").textContent;
        var foodquantity = document.getElementById("quantity-input1").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[2].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname2").textContent;
        var foodCost = document.getElementById("cost2").textContent;
        var foodquantity = document.getElementById("quantity-input2").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[3].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname3").textContent;
        var foodCost = document.getElementById("cost3").textContent;
        var foodquantity = document.getElementById("quantity-input3").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[4].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname4").textContent;
        var foodCost = document.getElementById("cost4").textContent;
        var foodquantity = document.getElementById("quantity-input4").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[5].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname5").textContent;
        var foodCost = document.getElementById("cost5").textContent;
        var foodquantity = document.getElementById("quantity-input5").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[6].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname6").textContent;
        var foodCost = document.getElementById("cost6").textContent;
        var foodquantity = document.getElementById("quantity-input6").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[7].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname7").textContent;
        var foodCost = document.getElementById("cost7").textContent;
        var foodquantity = document.getElementById("quantity-input7").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[8].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname8").textContent;
        var foodCost = document.getElementById("cost8").textContent;
        var foodquantity = document.getElementById("quantity-input8").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[9].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname9").textContent;
        var foodCost = document.getElementById("cost9").textContent;
        var foodquantity = document.getElementById("quantity-input9").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[10].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname10").textContent;
        var foodCost = document.getElementById("cost10").textContent;
        var foodquantity = document.getElementById("quantity-input10").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[11].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname11").textContent;
        var foodCost = document.getElementById("cost11").textContent;
        var foodquantity = document.getElementById("quantity-input11").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[12].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname12").textContent;
        var foodCost = document.getElementById("cost12").textContent;
        var foodquantity = document.getElementById("quantity-input12").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[13].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname13").textContent;
        var foodCost = document.getElementById("cost13").textContent;
        var foodquantity = document.getElementById("quantity-input13").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })
    document.getElementsByClassName("addbutton")[14].addEventListener("click",function()
    {function generateUniqueKey() {
        return new Date().getDate() + Math.random().toString(36).substr(2, 9);
      }
      const newfoodKey = generateUniqueKey();
        var foodName = document.getElementById("fname14").textContent;
        var foodCost = document.getElementById("cost14").textContent;
        var foodquantity = document.getElementById("quantity-input14").value;
        set(ref(database,'fooditems/'+userID+"newkey/"+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })


    }
})
