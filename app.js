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

// Initialize Firebase once
firebase.initializeApp(firebaseConfig);

// Optional: Initialize Analytics (make sure you have the analytics script in your HTML)
if (firebase.analytics) {
  firebase.analytics();
}

// Get Auth and Firestore instances
const auth = firebase.auth();
const db = firebase.firestore();

// Register user function — called by the form
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

// Royal message function for button (make sure you have <p id="message"></p> in HTML)
function royalMessage() {
  const message = document.getElementById("message");
  if (message) {
    message.innerText = "LONG LIVE YOUUUUUUU KINGGGGG 👑🔥🧡!";
  }
}

// Make functions global so HTML can access them
window.registerUser = registerUser;
window.royalMessage = royalMessage;
