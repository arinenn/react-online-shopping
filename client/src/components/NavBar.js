import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { IndexContext } from '../index';
import { SHOP_ROUTE } from '../utilities/consts';

const NavBar = observer(() => {
  const { user } = useContext(IndexContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          SuperShop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant="outline-light">Admin</Button>
            <Button
              variant="outline-light"
              className="ml-2"
              onClick={() => user.setIsAuth(false)}
            >
              Log Out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Log In
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
