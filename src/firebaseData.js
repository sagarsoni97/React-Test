import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBHR4SCkLQbZZjen73wbruXyQZ1wlaH9fQ",
    authDomain: "reacttest-293bd.firebaseapp.com",
    projectId: "reacttest-293bd",
    storageBucket: "reacttest-293bd.appspot.com",
    messagingSenderId: "757361764686",
    appId: "1:757361764686:web:84e5a87d32f32227e5561f"
  };

  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;