import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Signup/Signup';
import Landing from './component/Landing/Landing';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/fpc-qa/product-monitoring-system" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
