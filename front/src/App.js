import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import CustomersListPage from './pages/CustomersListPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomersListPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
