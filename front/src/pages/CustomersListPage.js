import React from 'react';
import { useState } from 'react';
import CustomerGrid from '../components/CustomersGrid';
import useAllCustomers from '../hooks/useAllCustomers';
import FilterArea from '../components/FilterArea';
import Pagination from '../components/Pagination';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import styles from '../styles/CustomerGrid.module.scss';


const CustomersListPage = () => {
  const { customers, isLoading, error } = useAllCustomers();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);


  const handleFilter = (filters) => {
  };

  const handleClearFilters = () => {
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers: {error.message}</p>;

  return (
    <Container>
      <Row className={styles.description}>
        <Col xs={8}>
          <h6 className={styles.descriptionText}>
            Consulte os seus Clientes cadastrados na sua Loja ou realize o cadastro de novos Cliente.
          </h6>
        </Col>
        <Col>
          <Button variant="outline-primary">Adicionar Cliente</Button>
        </Col>
        <Col>
          <Button variant="outline-primary" onClick={toggleFilter}>Filtrar</Button>
          {showFilter && (
            <FilterArea onFilter={handleFilter} onClear={handleClearFilters} />
          )}
        </Col>
      </Row>
      <CustomerGrid customers={customers} />
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </Container>
  );
};

export default CustomersListPage;
