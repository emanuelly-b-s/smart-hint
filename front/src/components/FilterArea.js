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
        console.log(filters)
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
            <Form.Control
                type="text"
                name="NameCompanyName"
                placeholder="Nome ou Razão Social do Cliente"
                value={filters.name}
                onChange={handleChange}
            />
            <Form.Control
                type="email"
                name="Email"
                placeholder="E-mail do Cliente"
                value={filters.email}
                onChange={handleChange}
            />
            <Form.Control
                type="tel"
                name="Phone"
                placeholder="Telefone do Cliente"
                value={filters.phone}
                onChange={handleChange}
            />
            <Form.Control
                type="date"
                name="RegisteredAtStart"
                placeholder="Selecione uma data ou período"
                value={filters.registeredAt}
                onChange={handleChange}
            />
            <Form.Select name="Blocked" onChange={handleChange}>
                <option value="">Cliente bloqueado?</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
            </Form.Select>

            <Button variant="outline-primary" onClick={handleClear}>Limpar filtros</Button>
            <Button variant="outline-primary" type="submit">Filtrar</Button>
        </Form>
    );
};

export default FilterArea;
