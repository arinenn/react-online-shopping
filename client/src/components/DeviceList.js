import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { IndexContext } from '../index';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
  const { device } = useContext(IndexContext);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
