import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';

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
              <h6 className='m-0'>Welcome, guest user</h6>
              <User size={18}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default BubbaNav;