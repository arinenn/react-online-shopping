import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Form, Card } from 'react-bootstrap';
import { IndexContext } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(IndexContext);

  return (
    <Form className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          style={{ cursor: 'pointer' }}
          border={
            brand.id === device.selectedBrand.id ? 'danger' : 'light'
          }
        >
          {brand.name}
        </Card>
      ))}
    </Form>
  );
});

export default BrandBar;
