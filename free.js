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
        var foodName = document.getElementById("oname0").textContent;
        var foodCost = document.getElementById("rupee0").textContent;
        var foodquantity = document.getElementById("quantity-input15").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname1").textContent;
        var foodCost = document.getElementById("rupee1").textContent;
        var foodquantity = document.getElementById("quantity-input16").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname2").textContent;
        var foodCost = document.getElementById("rupee2").textContent;
        var foodquantity = document.getElementById("quantity-input17").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname3").textContent;
        var foodCost = document.getElementById("rupee3").textContent;
        var foodquantity = document.getElementById("quantity-input18").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname4").textContent;
        var foodCost = document.getElementById("rupee4").textContent;
        var foodquantity = document.getElementById("quantity-input19").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname5").textContent;
        var foodCost = document.getElementById("rupee5").textContent;
        var foodquantity = document.getElementById("quantity-input20").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname6").textContent;
        var foodCost = document.getElementById("rupee6").textContent;
        var foodquantity = document.getElementById("quantity-input21").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname7").textContent;
        var foodCost = document.getElementById("rupee7").textContent;
        var foodquantity = document.getElementById("quantity-input22").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname8").textContent;
        var foodCost = document.getElementById("rupee8").textContent;
        var foodquantity = document.getElementById("quantity-input23").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname9").textContent;
        var foodCost = document.getElementById("rupee9").textContent;
        var foodquantity = document.getElementById("quantity-input24").value;
        set(ref(database,'fooditems/'+newfoodKey),{
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
        var foodName = document.getElementById("oname10").textContent;
        var foodCost = document.getElementById("rupee10").textContent;
        var foodquantity = document.getElementById("quantity-input25").value;
        set(ref(database,'fooditems/'+newfoodKey),{
            name:foodName,
            price:foodCost,
            qty:foodquantity


        })
    })

    }
})