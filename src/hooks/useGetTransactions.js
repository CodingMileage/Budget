import { useEffect } from "react"

export const useGetTransactions = () => {

    const [transactions, setTransactions] = useState([])

    const getTransactions = async () => {

    }

    useEffect(() => {
        getTransactions()
    }, [])

    return {transactions}
}