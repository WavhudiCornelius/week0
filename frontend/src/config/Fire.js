import firebase from 'firebase';

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
*/


  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3H-zfkj_GYpp00QQET5UfA7oNYQmXLV4",
    authDomain: "profile-creator-85b62.firebaseapp.com",
    databaseURL: "https://profile-creator-85b62.firebaseio.com",
    projectId: "profile-creator-85b62",
    storageBucket: "profile-creator-85b62.appspot.com",
    messagingSenderId: "1078488084344",
    appId: "1:1078488084344:web:7d33ab048b26577081a28d"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;