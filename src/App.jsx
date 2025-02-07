import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './ui/login/page';
import CarList from './ui/carros/page';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/carros" element={<CarList />} />
      </Routes>
    </Router>
  );
}

export default App;