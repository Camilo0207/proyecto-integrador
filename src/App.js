import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAccount from './pages/NewAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/newAccount" element={<NewAccount/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
