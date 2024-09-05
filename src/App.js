import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Reg from './Components/Registration/Reg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Reg" element={<Reg />}/>
      </Routes>
    </Router>
  );
}

export default App;
