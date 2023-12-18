import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const FilterArea = ({ onFilter, onClear }) => {

    const [filters, setFilters] = useState({
        name: '',
        email: '',
        phone: '',
        registeredAt: '',
        isBlocked: ''
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter(filters);
    };

    const handleClear = () => {
        setFilters({ name: '', email: '', phone: '', registeredAt: '', isBlocked: '' });
        onClear();
    };


    return (
        <Form onSubmit={handleSubmit}>
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
            <input
                type="tel"
                name="phone"
                placeholder="Telefone do Cliente"
                value={filters.phone}
                onChange={handleChange}
            />
            <input
                type="date"
                name="registeredAt"
                placeholder="Selecione uma data ou período"
                value={filters.registeredAt}
                onChange={handleChange}
            />
            <select name="isBlocked" value={filters.isBlocked} onChange={handleChange}>
                <option value="">Cliente bloqueado?</option>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
            </select>

            <Button variant="outline-primary" onClick={handleClear}>Limpar filtros</Button>
            <Button variant="outline-primary" type="submit">Filtrar</Button>
        </Form>
    );
};

export default FilterArea;
