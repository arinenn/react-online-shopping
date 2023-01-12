import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { IndexContext } from '../index';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from '../utilities/consts';

const NavBar = observer(() => {
  const { user } = useContext(IndexContext);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          SuperShop
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin
            </Button>
            <Button
              variant="outline-light"
              className="ms-3"
              onClick={() => {
                user.setIsAuth(false);
                navigate(LOGIN_ROUTE);
              }}
            >
              Log Out
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              // onClick={() => navigate(LOGIN_ROUTE)}
              onClick={() => user.setIsAuth(true)}
            >
              Authenticate
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
