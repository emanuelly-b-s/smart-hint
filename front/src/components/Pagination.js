import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import styles from '../styles/Pagination.module.scss'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Container className={styles.containerBtt}>
      <Button onClick={() => onPageChange(Number(currentPage) - 1)} disabled={currentPage <= 1}>
        Anterior
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </Button>
      ))}
      <Button onClick={() => onPageChange(Number(currentPage) + 1)} disabled={currentPage >= totalPages}>
        Próximo
      </Button>
    </Container>
  );
};

export default Pagination;