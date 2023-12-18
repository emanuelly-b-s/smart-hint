import styles from '../styles/CustomerGrid.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};



const CustomerGrid = ({ customers }) => {
  return (
    <Container className={styles.customerGrid}>
      <Row className={styles.descriptionColumns}>
        <Col className={styles.col2}><input type="checkbox" /></Col>
        <Col className={styles.col1}>Nome/Razão Social</Col>
        <Col className={styles.col2}>E-mail</Col>
        <Col className={styles.col1}>Telefone</Col>
        <Col className={styles.col2}>Data de Cadastro</Col>
        <Col className={styles.col1}>Bloqueado</Col>
        <Col className={styles.col2}>Ações</Col>
      </Row>
      {customers.map(customer => (
        <Row className={styles.row} key={customer.id}>
          <Col className={styles.col2}><input type="checkbox" /></Col>
          <Col className={styles.col1}>{customer.nameCompanyName}</Col>
          <Col className={styles.col2}>{customer.email}</Col>
          <Col className={styles.col1}>{customer.phone}</Col>
          <Col className={styles.col2}>{formatDate(customer.registeredAt)}</Col>
          <Col className={styles.col1}><input type="checkbox" checked={customer.isBlocked} /></Col>
          <Col className={styles.col2}><Button>Editar</Button ></Col>
        </Row>
      ))}
    </Container>
  );
};

export default CustomerGrid;
