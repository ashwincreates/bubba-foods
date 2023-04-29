import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BubbaNav from './components/BubbaNav';
import BrandPage from './pages/BrandPage';
import Delivery from './pages/Delivery';
import Cart from './components/Cart';
import Dining from './pages/Dining';
import FoodItemModal from './components/FoodItemModal';
import { useState } from 'react';
import Restaurant from './pages/Restaurant';

function App() {
    const [show, setShow] = useState(false)
    return (
        <>
            <BubbaNav />
            <Routes>
                <Route
                    path='/'
                    element={() =>
                        <>
                            <Outlet />
                            <Cart />
                            <FoodItemModal show={show} />
                        </>
                    }>
                    <Route path='' element={<HomePage />} />
                    <Route path=':brand/' element={<BrandPage />}>
                        <Route index element={<Delivery />}></Route>
                        <Route path='delivery' element={<Delivery />}></Route>
                        <Route path='dining' element={<Dining />}>
                        </Route>
                    </Route>
                    <Route path=':brand/dining/:restaurant' element={<Restaurant />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
