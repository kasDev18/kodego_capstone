import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import QMR from './component/FormsContent/QMR/QMR';
import CAR from './component/FormsContent/CAR/CAR';
import FormsMenu from './component/FormsMenu/FormsMenu';
import QMRNonPaper from './component/FormsContent/QMRNonPaper/QMRNonPaper';
import Signup from './component/Signup/Signup';
import { Component } from 'react';
import Login from './component/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
    }

    // PreventRedirect() {
    //     localStorage.setItem('user-logged', false)
    // }

    // GetPreventRedirect() {
    //     if (localStorage.getItem('user-logged', false)) {
    //         <Navigate to="/login" />
    //     }
    // }

    RedirectLogin() {
        if (window.location.pathname === '/') {
            window.location.href = '/login'
        }
    }

    componentDidMount() {
        this.RedirectLogin();
        // this.PreventRedirect();

    }

    render() {
        return (
            <BrowserRouter >
                <Routes>
                    <Route index path='/login' element={<Login />}></Route>
                    <Route path='/product-monitoring-system' element={
                        <FormsMenu />}>
                    </Route>
                    <Route path="/qmr/paper" element={
                        <QMR />
                    } />
                    <Route path="/qmr/non_paper" element={
                        <QMRNonPaper />
                    } />
                    <Route path="/car" element={
                        <CAR />
                    } />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter >
        );
    }
}

export default App;
