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
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
    }

    render() {
        return (
            <BrowserRouter >
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
}

export default App;
