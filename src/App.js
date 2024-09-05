import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Reg from './Components/Registration/Reg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/reg" element={<Reg />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
