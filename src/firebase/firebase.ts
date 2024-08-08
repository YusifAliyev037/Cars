import { initializeApp } from "firebase/app";
import { getDatabase, ref, push,  get,    } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjSdhFFKL_5ChKpPxNFxBso5TEl-GbBzM",
  authDomain: "cars-59ff4.firebaseapp.com",
  projectId: "cars-59ff4",
  storageBucket: "cars-59ff4.appspot.com",
  messagingSenderId: "288587473405",
  appId: "1:288587473405:web:e9cd34e4c457ec88a2b994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Create data
export const createData = async (path: string, data: any): Promise<string | null> => {
  try {
    const newRef = push(ref(db, path), data);
    return newRef.key;
  } catch (error) {
    console.error("Error creating data:", error);
    return null;
  }
};

// Read data
export const readData = async (path: string): Promise<any | null> => {
  try {
    const dataRef = ref(db, path);
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
  }
};


const dbref = ref(db, "Marrrrka")

console.log(dbref);
