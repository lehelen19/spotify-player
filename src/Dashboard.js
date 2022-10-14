import React from 'react';
import useAuth from './useAuth';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  return <div>Hi from dashboard! {code}</div>;
};

export default Dashboard;
