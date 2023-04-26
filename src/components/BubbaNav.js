import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';
import "./LoginSignUp.css";


function BubbaNav() {
  return (
    <Navbar bg="white" expand="lg" className='border-bottom'>
      <Container className='justify-content'>
        <Navbar.Brand href="#home">
          <Link to={'/'}>
            <img src='/Bubba Foods.png' alt='logo' height={28}></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 align-items-center">
            <Link to={'/login'} className='btn btn-login me-2'>
              Login
            </Link>
            <Nav.Item>
              <Link to={'/profile'}>
                <button className='btn btn-secondary rounded-circle'>
                  <User size={18}/>
                </button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BubbaNav;


