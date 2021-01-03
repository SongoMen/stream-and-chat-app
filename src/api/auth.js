import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_ANALYTICS_ID
}

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
export const perf = firebase.performance();

export function loginWithGoogle() {
  return firebaseAuth().signInWithRedirect(googleProvider);
}

export function auth(email, pw) {
  let username = localStorage.getItem("user");
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(function(newUser) {
      db.collection("users")
        .doc(newUser.user.uid)
        .set({
          email,
          username,
          admin: false
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      return firebase.auth().currentUser.updateProfile({
        displayName: username
      });
    });
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}