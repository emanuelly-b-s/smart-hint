import { useState } from 'react';

const useFormValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };


    const validateCPF = (cpf) => {
        const strippedCpf = cpf.replace(/\D+/g, '');

        if (!strippedCpf || strippedCpf.length !== 11 || /^(\d)\1+$/.test(strippedCpf))
            return false;

        const calculateCheckDigit = (cpf, factor) => {
            let total = 0;
            for (const digit of cpf) {
                if (factor > 1) total += parseInt(digit) * factor--;
            }
            const remainder = total % 11;
            return remainder < 2 ? 0 : 11 - remainder;
        };

        const checkDigit1 = calculateCheckDigit(strippedCpf.slice(0, 9), 10);
        const checkDigit2 = calculateCheckDigit(strippedCpf.slice(0, 10), 11);

        return checkDigit1 === parseInt(strippedCpf.charAt(9)) &&
            checkDigit2 === parseInt(strippedCpf.charAt(10));
    };

    const validateCNPJ = (cnpj) => {
        const strippedCnpj = cnpj.replace(/\D+/g, '');

        if (!strippedCnpj || strippedCnpj.length !== 14 || /^(\d)\1+$/.test(strippedCnpj))
            return false;


        const calculateCheckDigit = (cnpj, factor) => {
            let total = 0;
            for (const digit of cnpj) {
                if (factor > 1) {
                    total += parseInt(digit) * factor--;
                    if (factor === 2) factor = 9;
                }
            }
            const remainder = total % 11;
            return remainder < 2 ? 0 : 11 - remainder;
        };

        const checkDigit1 = calculateCheckDigit(strippedCnpj.slice(0, 12), 5);
        const checkDigit2 = calculateCheckDigit(strippedCnpj.slice(0, 13), 6);

        return checkDigit1 === parseInt(strippedCnpj.charAt(12)) &&
            checkDigit2 === parseInt(strippedCnpj.charAt(13));
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        let validationErrors = {};

        if (formData.cpfCnpj && formData.cpfCnpj.length <= 14 && !isValidCPF(formData.cpfCnpj)) {
            validationErrors.cpfCnpj = 'CPF inválido';
        } else if (formData.cpfCnpj && !isValidCNPJ(formData.cpfCnpj)) {
            validationErrors.cpfCnpj = 'CNPJ inválido';
        }


        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Formulário enviado:', formData);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit
    };
};

export default useFormValidation;
