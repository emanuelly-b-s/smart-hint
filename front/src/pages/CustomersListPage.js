// src/pages/CustomersListPage.js
import React from 'react';
import { useState } from 'react';
import CustomerGrid from '../components/CustomersGrid';
import useAllCustomers from '../hooks/useAllCustomers';
import FilterArea from '../components/FilterArea';
import Pagination from '../components/Pagination';

const CustomersListPage = () => {
  const { customers, isLoading, error } = useAllCustomers();
  const [currentPage, setCurrentPage] = useState(1);
  const handleFilter = (filters) => {
    
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers: {error.message}</p>;

  return (
    <div>
      <h1>Consulte os seus Clientes cadastrados na sua Loja ou realize o cadastro de novos Cliente</h1>
      <button>Adicionar Cliente</button>
      <FilterArea onFilter={handleFilter} />
      <CustomerGrid customers={customers} />
      <Pagination currentPage={currentPage}  onPageChange={setCurrentPage} />

    </div>
  );
};

export default CustomersListPage;
