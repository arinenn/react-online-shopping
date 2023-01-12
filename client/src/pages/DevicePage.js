import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'iPhone 12 Pro',
    price: 25000,
    rating: 5,
    img: 'img',
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>Starting at {device.price}$</h3>
            <Button variant="outline-dark">Add To Card</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
