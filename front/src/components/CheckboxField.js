import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';

const CheckboxField = ({ label, tooltip, checked, onChange }) => {
    return (
        <Container>
            <Form.Check>
                <input type="checkbox" checked={checked} onChange={onChange} /> {label}
            </Form.Check>
            <span title={tooltip}></span>
        </Container>
    );
};



export default CheckboxField;
