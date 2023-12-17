import styles from '../styles/CustomerGrid.module.scss';

const CustomerGrid = ({ customers }) => {
  return (
    <table className={styles.customerGrid}>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Nome/Razão Social</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Data de Cadastro</th>
          <th>Bloqueado</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
            <td><input type="checkbox" /></td>
            <td>{customer.nameCompanyName}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.registrationDate}</td>
            <td><input type="checkbox" checked={customer.isBlocked} /></td>
            <td><button>Editar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerGrid;
