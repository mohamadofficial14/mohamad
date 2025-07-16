// 👑 Firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyCnpl5iwC1dzfClgHeQ6EEQsljqDkqSzDU",
  authDomain: "mohamad-soft.firebaseapp.com",
  projectId: "mohamad-soft",
  storageBucket: "mohamad-soft.appspot.com",
  messagingSenderId: "140858427587",
  appId: "1:140858427587:web:c0013bf357a0b307fa7a76",
  measurementId: "G-T9CFVMMZ3J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional: Analytics
if (firebase.analytics) {
  firebase.analytics();
}

// Auth & Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// 👑 Register Function
function registerUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      await db.collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: new Date().toISOString()
      });

      alert("👑 Account created! LONG LIVE THE KING!");
    })
    .catch((error) => {
      console.error("❌ Error creating user:", error);
      alert("Error: " + error.message);
    });
}

// 👑 Royal Message
function royalMessage() {
  const message = document.getElementById("message");
  if (message) {
    message.innerText = "LONG LIVE YOUUUUUUU KINGGGGG 👑🔥🧡!";
  }
}

// Expose to HTML
window.registerUser = registerUser;
window.royalMessage = royalMessage;
// Firebase config + initialize
// auth & db setup

// 🔐 Register function
function registerUser(email, password) {
  // ...registration logic...
}

// 👑 Royal message button
function royalMessage() {
  // ...message logic...
}

// 🔑 Login function (ADD HERE at the bottom!)
function loginUser(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`👑 Welcome back, Royal ${user.email}!`);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("❌ Login error:", error);
      alert("Login Failed: " + error.message);
    });
}

// Make functions global
window.registerUser = registerUser;
window.royalMessage = royalMessage;
window.loginUser = loginUser; // ✅ Include this line!
