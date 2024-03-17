import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppState } from '../redux/store';

interface RequireAuthProps {
  children: ReactElement
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const logIn = useSelector((state: AppState) => state.appReducer.logIn);
  return logIn ? children : <Navigate to="/" />;
}

export default RequireAuth;
