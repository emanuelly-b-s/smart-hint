import React from 'react';

const FilterArea = ({ onFilter }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter();
    };

    return (
        <form onSubmit={handleSubmit}>
            {}
            <button type="submit">Filtrar</button>
        </form>
    );
};

export default FilterArea;
