import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
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
          <Nav style={{ color: 'white' }}>
            <Button variant="outline-light">Admin</Button>
            <Button
              variant="outline-light"
              className="ms-3"
              onClick={() => user.setIsAuth(false)}
            >
              Log Out
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: 'white' }}>
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
