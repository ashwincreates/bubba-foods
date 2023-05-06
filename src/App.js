import { Link, Outlet, Route, Routes } from 'react-router-dom';
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
import ProfileDetails from './pages/ProfileDetails';
import Profile from './pages/Profile';
import AddressBook from './pages/AddressBook';
import OrderHistory from './pages/OrderHistory';
import BookingHistory from './pages/BookingHistory';
import Cart from './components/Cart';
import Rewards from './pages/Rewards';
import CheckOut from './pages/CheckOut';
import Support from './pages/Support';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <NavBar>
                            <NavBar.Brand>
                                <Link to='/'>
                                    <img src='/images/BubbaFoodH.png' alt='logo' width='130px' />
                                </Link>
                            </NavBar.Brand>
                            <NavBar.Items>
                                <UserInfo />
                            </NavBar.Items>
                        </NavBar>
                        <Outlet />
                        <Cart />
                    </>
                }>
                    <Route index path='' element={<HomePage />} />
                    <Route path='/:brand/:id/' element={<BrandPage />}>
                        <Route path="delivery" element={<Delivery />} />
                        <Route path="dining" element={<Dining />} />
                    </Route>
                    <Route path=':brand/:id/dining/:restaurant/' element={<Restaurant />}>
                        <Route path='reviews' exact element={<Reviews />} />
                        <Route path='photos' element={<Photos />} />
                        <Route path='menu' element={<Menu />} />
                    </Route>
                    <Route path='/profile/:userid/' element={<ProfileDetails />}>
                        <Route path='details' element={<Profile />} />
                        <Route path='addressbook' element={<AddressBook />} />
                        <Route path='orders' element={<OrderHistory />} />
                        <Route path='bookings' element={<BookingHistory />} />
                        <Route path='rewards' element={<Rewards />} />
                        <Route path='support' element={<Support/>} />
                        {/* <Route path='favourites' element={}/> */}
                    </Route>
                </Route>
                <Route path='checkout' element={
                    <>
                        <NavBar>
                            <NavBar.Brand>
                                <Link to='/'>
                                    <img src='/images/BubbaFoodH.png' alt='logo' width='130px' />
                                </Link>
                            </NavBar.Brand>
                            <NavBar.Items>
                                <UserInfo />
                            </NavBar.Items>
                        </NavBar>
                        <CheckOut />
                    </>
                } />
                <Route path='login' element={<LoginForm />} />
                <Route path='register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
