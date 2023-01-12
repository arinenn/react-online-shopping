import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStorage from './storage/DeviceStorage';
import UserStorage from './storage/UserStorage';

export const IndexContext = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IndexContext.Provider
    value={{
      user: new UserStorage(),
      device: new DeviceStorage(),
    }}
  >
    <App />
  </IndexContext.Provider>
);
