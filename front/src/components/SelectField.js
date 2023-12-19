import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';

const SelectField = ({ label, options, required, tooltip, onChange }) => {
    return (
        <Container>
            <label>{label}</label>
            <Form.Select required={required} title={tooltip} onChange={onChange}>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </Form.Select>
        </Container>
    );
};

export default SelectField;
