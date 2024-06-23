import { collection, onSnapshot, orderBy, query, where, deleteDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config/firebase-config"
import {useGetUserInfo} from './useGetUserInfo'

export const useGetTransactions = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [transactions, setTransactions] = useState([])
    const [transactionTotals, setTransactionTotals] = useState({
        balance: 0.0,
        income: 0.0,
        expenses: 0.0,
    });

    const transactionCollectionRef = collection(db, "transactions")
    const {userID} = useGetUserInfo()

    const getTransactions = async () => {

        let unsubscribe;

        try {
            const queryTransactions = query(
                transactionCollectionRef, 
                where("userID", "==", userID),
                orderBy("createdAt")
            );

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {

                let docs = [];
                let totalIncome = 0
                let totalExpenses = 0

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    if (data.transactionType === "Income") {
                        totalIncome += parseInt(data.transactionAmount);
                      } else {
                        totalExpenses += parseInt(data.transactionAmount);
                      }

                    docs.push({ ...data, id });
                })
                setTransactions(docs)

                let balance = totalIncome - totalExpenses
                setTransactionTotals({
                    balance,
                    income: totalIncome,
                    expenses: totalExpenses,
                })
            })
        } catch (err) {
            console.log(err)
        }

        return () => unsubscribe
    }

    const deleteTransaction = async (transactionId) => {
        setLoading(true);
        setError(null);
        try {
          const transactionDoc = doc(collection(db, 'transactions'), transactionId);
          await deleteDoc(transactionDoc);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

    useEffect(() => {
        getTransactions()
    }, [])

    return {transactions, transactionTotals, deleteTransaction}
}