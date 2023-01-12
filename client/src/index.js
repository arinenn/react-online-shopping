import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStorage from './storage/UserStorage';

export const AppContext = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext.Provider
    value={{
      user: new UserStorage(),
    }}
  >
    <App />
  </AppContext.Provider>
);
