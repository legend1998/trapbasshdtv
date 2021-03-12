// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAMRQFjtHSj4ncVMj6uyevM4nWYd6JRU8I",
  authDomain: "trapbasshdtv-f1e6b.firebaseapp.com",
  projectId: "trapbasshdtv-f1e6b",
  storageBucket: "trapbasshdtv-f1e6b.appspot.com",
  messagingSenderId: "1004118478215",
  appId: "1:1004118478215:web:b9f4f8bc87c82ef75bd722",
  measurementId: "G-SH2P9T6NWQ",
};

const app = firebase.initializeApp(firebaseConfig);

const firedb = app.firestore();
const firestorage = app.storage();
const auth = app.auth();

// const handlethumbnailUpload = () => {
//     if (!thumbnail) return;

//     var storageRef = storage.ref();
//     storageRef
//       .child(`thumbnail/${thumbnail.name + Date.now()}`)
//       .put(thumbnail)
//       .then((snapshot) => {
//         snapshot.ref
//           .getDownloadURL()
//           .then(function (downloadURL) {
//             setThumbnailURL(downloadURL);
//             console.log("File available at", downloadURL);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       });
//   };

export { firedb, firestorage, auth };
