import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './Signup/Signup';
import Landing from './component/Landing/Landing';
import QMR from './component/FormsContent/QMR/QMR';
import CAR from './component/FormsContent/CAR/CAR';
import FormsMenu from './component/FormsMenu/FormsMenu';
import QMRNonPaper from './component/FormsContent/QMRNonPaper/QMRNonPaper';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <FormsMenu>
                <Routes>
                    <Route path="/qmr/paper" element={<QMR />} />
                    <Route path="/qmr/non_paper" element={<QMRNonPaper />} />
                    <Route path="/car" element={<CAR />} />
                </Routes>
            </FormsMenu>
        </BrowserRouter>
    );
}

export default App;
