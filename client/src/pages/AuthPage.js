import { Container, Form, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utilities/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">
          {isLogin ? 'Authenticate' : 'Registrate'}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Email" />
          <Form.Control
            className="mt-3"
            type="password"
            placeholder="Password"
          />
          <Form className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                No account?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
            ) : (
              <div>
                Already have an account?{' '}
                <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}
            <Button variant="outline-success">
              {isLogin ? 'Log In' : 'Register'}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
