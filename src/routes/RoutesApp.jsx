import React from 'react';
import { Route, Routes } from 'react-router';
import ListUsers from '../components/ListUsers/ListUsers';
import App from '../components/App/App';
import DetailUser from '../components/DetailUser/DetailUser';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listUsers" element={<ListUsers />} />
      <Route path="/detailUser" element={<DetailUser />} />
    </Routes>
  );
};

export default RoutesApp;
