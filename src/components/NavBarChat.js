import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from '../images/user.png';
import { auth } from '../services/firebase';

export default function NavBarChat() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <row>
                    <Form inline>
                        <Link onClick={() => auth().signOut()} ><img src={user} width="30" /> Cerrar Sesion</Link>
                    </Form>
                </row>

            </Navbar.Collapse>
        </Navbar>
    )

}