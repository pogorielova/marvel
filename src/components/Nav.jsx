import React from 'react';
import  {Navbar, Nav} from 'react-bootstrap'


function Navigation(props) {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className='logo'>MARVEL</Navbar.Brand>
            <Nav className="mr-auto">
                {props.children}
            </Nav>
        </Navbar>
    )
}

export default Navigation;