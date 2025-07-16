// Initialize Firebase using CDN (for basic websites)
const firebaseConfig = {
  apiKey: "AIzaSyCnpl5iwC1dzfClgHeQ6EEQsljqDkqSzDU",
  authDomain: "mohamad-soft.firebaseapp.com",
  projectId: "mohamad-soft",
  storageBucket: "mohamad-soft.appspot.com",
  messagingSenderId: "140858427587",
  appId: "1:140858427587:web:c0013bf357a0b307fa7a76",
  measurementId: "G-T9CFVMMZ3J"
};

// Load Firebase App
firebase.initializeApp(firebaseConfig);

// (Optional) Load Firebase Analytics
firebase.analytics();

// Add your future auth / chat / database code below

function royalMessage() {
  const message = document.getElementById("message");
  message.innerText = "LONG LIVE YOUUUUUUU KINGGGGG 👑🔥🧡!";
} 
