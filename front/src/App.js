import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import CustomersListPage from './pages/CustomersListPage';
import CustomerRegistrationPage from './pages/CustomerRegistrationPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomersListPage />} />
        <Route path="/cadastro" element={<CustomerRegistrationPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
