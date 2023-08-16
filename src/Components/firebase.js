
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA64CTb6BYDnkjVeT7hQV9gVRXi8Mmx1IE",
  authDomain: "wasifateeq-chatapp.firebaseapp.com",
  projectId: "wasifateeq-chatapp",
  storageBucket: "wasifateeq-chatapp.appspot.com",
  messagingSenderId: "1027548000618",
  appId: "1:1027548000618:web:df637af70f01b70292b513",
  measurementId: "G-KVDKE6FL43"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
