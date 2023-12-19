import React, { useState } from 'react';
import InputField from './InputField';
import DateField from './DateField';
import SelectField from './SelectField';
import CheckboxField from './CheckboxField';
import SubmitButton from './SubmitButton';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import { useEffect } from 'react';
import styles from '../styles/FormRegistration.module.scss';

const CustomerRegistrationForm = () => {

    const [personType, setPersonType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [inscription, setInscription] = useState('');
    const [isExempt, setIsExempt] = useState(false);
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePersonTypeChange = (event) => {
        setPersonType(event.target.value);
    };

    const handleExemptChange = (event) => {
        setIsExempt(event.target.checked);
    };


    const handleSubmit = (event) => {
        if (personType === 'Física') {
            setPersonType('Individual')
            switch (gender) {
                case "Masculino":
                    setGender("Male")
                    break;
                case "Feminino":
                    setGender("Female")
                default:
                    setGender("Other")
                    break;
            }
            const formData = {
                Name: name,
                Email: email,
                Phone: phone,
                RegisteredAt: "",
                PersonType: "Individual",
                CpfCnpj: cpfCnpj,
                StateRegistration: inscription,
                Gender: gender,
                Birthdate: birthdate,
                PasswordCustomer: confirmPassword,
                Blocked: isBlocked
            }
            
        }
    }
        ;

    const individualPerson = personType === 'Física';
    const exempt = isExempt === 'Isento';

    return (
        <Container className={styles.container}>
            <Form onSubmit={handleSubmit}>
                <InputField label="Nome do Cliente/Razão Social" type="text" maxLength={150}
                    required tooltip="Nome completo ou Razão Social do Cliente"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <InputField label="E-Mail" type="email" maxLength={150}
                    required tooltip="E-mail do Cliente"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputField label="Telefone" type="text" maxLength={11}
                    required tooltip="Telefone do Cliente" mask="(##) #####-####"
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                <DateField label="Data de Cadastro" defaultValue={new Date().toISOString().slice(0, 10)} disabled />
                <SelectField
                    label="Tipo de Pessoa"
                    options={['', 'Jurídica', 'Física']}
                    required
                    tooltip="Selecione o tipo de Pessoa"
                    onChange={handlePersonTypeChange}
                />
                <InputField label="CPF/CNPJ" type="text" maxLength={14}
                    required tooltip="Insira o CPF ou o CNPJ do Cliente" mask="CPF/CNPJ"
                    value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />
                <Container className={styles.stateRegistration}>

                    <InputField label="Inscrição Estadual" type="text" maxLength={12}
                        tooltip="Inscrição Estadual do Cliente, selecionar Isento caso assim for"
                        value={inscription} onChange={(e) => setInscription(e.target.value)}
                        disabled={isExempt} />
                    <CheckboxField label="Isento"
                        checked={isExempt}
                        onChange={handleExemptChange}
                    />
                </Container>

                {individualPerson && (
                    <>
                        <SelectField
                            label="Gênero"
                            options={['Feminino', 'Masculino', 'Outro']}
                            required
                            tooltip="Selecione o gênero do Cliente"
                            value={gender} onChange={(e) => setGender(e.target.value)}
                        />
                        <DateField
                            label="Data de Nascimento"
                            tooltip="Data de nascimento do Cliente"
                            required
                            value={birthdate} onChange={(e) => setBirthdate(e.target.value)}

                        />
                    </>
                )}
                <CheckboxField label="Bloqueado" tooltip="Bloqueio o acesso do Cliente na sua Loja"
                    value={isBlocked} onChange={(e) => setIsBlocked(e.target.value)} />
                <InputField label="Senha" type="password" minLength={8} maxLength={15} required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <InputField label="Confirmação de Senha" type="password" minLength={8} maxLength={15} required
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <SubmitButton label="Adicionar Cliente" />
            </Form>

        </Container>
    );
};

export default CustomerRegistrationForm;
