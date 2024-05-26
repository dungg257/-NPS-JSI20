 
 
 
 
 
 
 
 
 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
 import{getAuth} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCY8t2uhUaPzRvyMKRzL3UT1vab65J4svY",
   authDomain: "nps-jsi20-222.firebaseapp.com",
   projectId: "nps-jsi20-222",
   storageBucket: "nps-jsi20-222.appspot.com",
   messagingSenderId: "241912240707",
   appId: "1:241912240707:web:4814bf3c1e1d8b139d12f6",
   measurementId: "G-597REXS194"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app)
 export const auth = getAuth(app)

















