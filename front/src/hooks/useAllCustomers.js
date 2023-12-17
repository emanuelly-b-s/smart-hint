import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get('http://localhost:5038/customer');
                setCustomers(response.data);
                console.log(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    return { customers, isLoading, error };
};

export default useAllCustomers;
