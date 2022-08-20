import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import QMR from './component/FormsContent/QMR/QMR';
import CAR from './component/FormsContent/CAR/CAR';
import FormsMenu from './component/FormsMenu/FormsMenu';
import QMRNonPaper from './component/FormsContent/QMRNonPaper/QMRNonPaper';
import { Component } from 'react';
import Login from './component/Login/Login';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
    }

    RedirectLogin() {
        if (window.location.pathname === '/') {
            window.location.href = '/login'
        }
    }

    componentDidMount() {
        this.RedirectLogin();
    }

    render() {
        return (
            <BrowserRouter >
                <Routes>
                    <Route index path='/login' element={<Login />}></Route>
                    <Route index path='/product-monitoring-system' element={<FormsMenu />}></Route>
                    <Route path="/qmr/paper" element={<QMR />} />
                    <Route path="/qmr/non_paper" element={<QMRNonPaper />} />
                    <Route path="/car" element={<CAR />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
