import React from 'react';

const DateField = ({ label, defaultValue, disabled, tooltip }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="date" defaultValue={defaultValue} disabled={disabled} title={tooltip} />
        </div>
    );
};

export default DateField;
