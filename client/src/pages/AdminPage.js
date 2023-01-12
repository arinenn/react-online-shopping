import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const AdminPage = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column mt-3">
      <Button
        variant="outline-dark"
        className="mt-2 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Add Type
      </Button>
      <Button
        variant="outline-dark"
        className="mt-2 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Add Brand
      </Button>
      <Button
        variant="outline-dark"
        className="mt-2 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Add Device
      </Button>
      <CreateType
        show={typeVisible}
        onHide={() => setTypeVisible(false)}
      />
      <CreateBrand
        show={brandVisible}
        onHide={() => setBrandVisible(false)}
      />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default AdminPage;
