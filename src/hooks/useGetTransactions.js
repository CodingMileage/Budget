import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import {db} from "../config/firebase-config"
import {useGetUserInfo} from './useGetUserInfo'

export const useGetTransactions = () => {

    const [transactions, setTransactions] = useState([])

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

            let unsubscribe = onSnapshot(queryTransactions, (snapshot) => {

                const docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ ...data, id });
                })

                setTransactions(docs)
            })
        } catch (err) {
            console.log(err)
        }

        return () => unsubscribe
    }

    useEffect(() => {
        getTransactions()
    }, [])

    return {transactions}
}