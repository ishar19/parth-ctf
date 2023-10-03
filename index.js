const firebase = require("firebase/app");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
} = require("firebase/storage");
const firebaseConfig = {
  apiKey: "AIzaSyAITl4_Aj1Qamtb_lbG57m_YA7oHBhtBhs",
  //   authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "myevilapp-2e278",
  storageBucket: "myevilapp-2e278.appspot.com",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:524049307205:android:816f3e769403eebe93f52c",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const fileRef = ref(storage, "playerscore.png");
console.log(app);
getDownloadURL(fileRef)
  .then((url) => {
    console.log("File available at", url);
  })
  .catch((error) => {
    console.error("Error getting file:", error);
  });

// const listRef = ref(storage, "");

// Find all the prefixes and items.
// listAll(listRef)
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//       listAll(folderRef);
//     });
//     res.items.forEach((itemRef) => {
//       // All the items under listRef.
//       console.log(itemRef);
//     });
//   })
//   .catch((error) => {
//     // Uh-oh, an error occurred!
//     console.log(error);
//   });
