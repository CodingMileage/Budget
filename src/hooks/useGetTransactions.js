import { useEffect } from "react"

export const useGetTransactions = () => {

    const [useGetTransactions, setUseGetTransactions] = useState([])

    const getTransactions = async () => {

    }

    useEffect(() => {
        getTransactions()
    }, [])

    return {transactions}
}