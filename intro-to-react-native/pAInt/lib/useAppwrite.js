import { Alert } from 'react-native'
import { useState, useEffect } from "react";

const useAppwrite = (fn, args) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fn()
                setData(response)
            } catch (error) {
                Alert.alert('Error', error.message)
            }finally{
                setIsLoading(false)
            }
        }
    useEffect(() => {
        fetchData();
    }, [])

    /**
     * Refetches latest data from Appwrite server
     * @returns new data from Appwrite
     */

    const refetch = () => fetchData();

    return { data, isLoading, refetch }
}

export default useAppwrite