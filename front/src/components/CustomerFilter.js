import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

const CustomerFilter = ({ onApplyFilter, onClearFilter }) => {
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    phone: '',
    registrationDate: '',
    isBlocked: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    onApplyFilter(filters);
  };

  const handleClearFilter = () => {
    setFilters({ name: '', email: '', phone: '', registrationDate: '', isBlocked: '' });
    onClearFilter();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Nome ou Razão Social do Cliente"
        value={filters.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail do Cliente"
        value={filters.email}
        onChange={handleChange}
      />
      <Button onClick={handleApplyFilter}>Aplicar filtros</Button>
      <Button onClick={handleClearFilter}>Limpar filtros</Button>
    </div>
  );
};

export default CustomerFilter;
