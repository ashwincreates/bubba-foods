import { useState } from 'react';
import { User } from 'react-feather';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar/Navbar';
import LoginForm from './pages/Login';
import BrandPage from './pages/BrandPage';
import Delivery from './pages/Delivery';
import Dining from './pages/Dining';
import Restaurant from './pages/Restaurant';
import Reviews from './components/Restaurant/Reviews';
import Photos from './components/Restaurant/Photos';
import Menu from './components/Restaurant/Menu';
import Register from './pages/Register';
import UserInfo from './components/UserInfo';

function App() {
    const [show, setShow] = useState(false)
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <NavBar>
                            <NavBar.Brand>
                                <img src='/images/Bubba Foods1.png' alt='logo' width='50px' />
                            </NavBar.Brand>
                            <NavBar.Items>
                                <UserInfo/>
                            </NavBar.Items>
                        </NavBar>
                        <Outlet />
                    </>
                }>
                    <Route index path='' element={<HomePage />} />
                    <Route path='/:brand/:id/' element={<BrandPage />}>
                        <Route path="delivery" element={<Delivery />} />
                        <Route path="dining" element={<Dining />} />
                    </Route>
                    <Route path=':brand/dining/:restaurant/' element={<Restaurant />}>
                        <Route path='reviews' exact element={<Reviews />} />
                        <Route path='photos' element={<Photos />} />
                        <Route path='menu' element={<Menu />} />
                    </Route>
                </Route>
                <Route path='login' element={<LoginForm />} />
                <Route path='register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
