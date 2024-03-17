import React, { FC } from 'react';
import './LogOut.css';

interface LogOutProps {}

const LogOut: FC<LogOutProps> = () => (
  <div className="LogOut" data-testid="LogOut">
    LogOut Component
  </div>
);

export default LogOut;
