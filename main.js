//import { collection, doc, setDoc } from "firebase/firestore"; 

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// Initialize and Create Instance Token "DB"
const serviceAccount = require('./firebaseCreds.json');
initializeApp({
    credential: cert(serviceAccount)
});
const db = getFirestore();
const collectionName = 'artatelier'

// Read and get records for collection
async function quickstartQuery(db, collectionName) {
    // [START quickstart_query]
    // Realtime listens are not yet supported in the Node.js SDK
    results = []
    const snapshot = await db.collection(collectionName).get();
    snapshot.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
        //console.log(doc.id, '=>', doc.data());
    });
    // [END quickstart_query]
    return results
}

collectionResults = [];
collectionResults = quickstartQuery(db, collectionName);
console.log("Hello")
console.log(collectionResults);