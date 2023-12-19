import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllCustomers = (initialPage = 1, filters = {}) => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 20;

    useEffect(() => {

        const fetchCustomers = async () => {
            setIsLoading(true);
            setError(null);

            try {

                const query = new URLSearchParams({ page: currentPage, pageSize, ...filters }).toString();

                const response = await axios.get(`http://localhost:5038/customer?${query}`);

                setCustomers(response.data.data);
                setTotalPages(Math.ceil(response.data.total / pageSize));

            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCustomers();
    }, [currentPage, filters]);


    return { customers, isLoading, error, totalPages, setCurrentPage, currentPage, filters };
};

export default useAllCustomers;
