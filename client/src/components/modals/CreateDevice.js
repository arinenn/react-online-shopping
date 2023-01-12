import { useContext, useState } from 'react';
import {
  Button,
  Dropdown,
  Form,
  Modal,
  Row,
  Col,
} from 'react-bootstrap';
import { IndexContext } from '../../index';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(IndexContext);
  const [info, setInfo] = useState([]);

  function addInfo() {
    setInfo([
      ...info,
      { title: '', description: '', number: Date.now() },
    ]);
  }
  function removeInfo(number) {
    setInfo(info.filter((i) => number !== i.number));
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Add New Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Select Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Enter Device Name"
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter Device Price"
            type="number"
          />
          <Form.Control
            className="mt-3"
            placeholder="Select Device Image"
            type="file"
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add New Property
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-2">
              <Col md={4}>
                <Form.Control placeholder="Enter Property Name" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Enter Property Description" />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
