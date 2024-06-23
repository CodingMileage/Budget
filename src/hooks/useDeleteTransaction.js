// // hooks/useDeleteTransaction.js
// import { useState } from 'react';
// import { db } from '../config/firebase-config'; // Adjust the import according to your project setup
// import { collection, deleteDoc, doc } from 'firebase/firestore';

// export const useDeleteTransaction = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const deleteTransaction = async (transactionId) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const transactionDoc = doc(collection(db, 'transactions'), transactionId);
//       await deleteDoc(transactionDoc);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   return { deleteTransaction, loading, error };
// };
