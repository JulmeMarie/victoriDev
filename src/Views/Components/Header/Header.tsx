import React, { FC, ReactNode } from 'react';
import './Header.css';

interface HeaderProps {
  children: ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {


  return (
    <div className="Header" data-testid="Header">
      {children}
    </div>
  );
}

export default Header;
