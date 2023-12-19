import React from 'react';
import Form from 'react-bootstrap/esm/Form';

const InputField = ({ label, type, maxLength, required, tooltip, mask }) => {

    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} maxLength={maxLength} required={required} title={tooltip} />
        </>
    );
};

export default InputField;
