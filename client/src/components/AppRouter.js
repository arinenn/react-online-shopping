import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IndexContext } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(IndexContext);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
});

export default AppRouter;
