import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { IndexContext } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(IndexContext);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroupItem
          style={{ cursor: 'pointer', padding: '8px 24px' }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
