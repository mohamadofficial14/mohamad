console.log
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
if (typeof firebase.analytics === "function") {
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

// 🔑 Login Function
function loginUser(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`👑 Welcome back, Royal ${user.email}!`);
      window.location.href = "dashboard.html"; // Redirect after login
    })
    .catch((error) => {
      console.error("❌ Login error:", error);
      alert("Login Failed: " + error.message);
    });
}

// 👑 Royal Message
function royalMessage() {
  const message = document.getElementById("message");
  if (message) {
    message.innerText = "LONG LIVE YOUUUUUUU KINGGGGG 👑🔥🧡!";
  }
}

// Make functions global so HTML can call them
window.registerUser = registerUser;
window.loginUser = loginUser;
window.royalMessage = royalMessage;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script running!");

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("LOGIN SUCCESSFUL:", userCredential.user);
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("LOGIN ERROR:", error.message);
        alert("Login Failed: " + error.message);
      });
  });
}); 
firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    const bannedDoc = await db.collection("bannedUsers").doc(user.uid).get();
    if (bannedDoc.exists) {
      document.body.innerHTML = `
        <div style="background:#cc1818; color:#fff; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; font-family:sans-serif; padding:20px;">
          <div style="font-size:100px; margin-bottom:20px;">⛔</div>
          <h1>You have been banned from the website.</h1>
          <p>Confused? Then please contact my YouTube Channel <strong>@RunnerBot</strong> to know your ban reason and length.</p>
        </div>
      `;
    }
  }
});
