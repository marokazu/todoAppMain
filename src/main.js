import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import firebase from 'firebase'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBak4-vU2m3dbjrpvhmWPQ7rfQC1q54aDA",
    authDomain: "todoapp-3cddc.firebaseapp.com",
    projectId: "todoapp-3cddc",
    storageBucket: "todoapp-3cddc.appspot.com",
    messagingSenderId: "27842679120",
    appId: "1:27842679120:web:fb849ac8bdb0d5239cdc55",
    measurementId: "G-CGDMJJ44BM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);

new Vue({
  render: h => h(App),
}).$mount('#app')
