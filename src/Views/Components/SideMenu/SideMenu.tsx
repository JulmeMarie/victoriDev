import React, { FC } from 'react';
import './SideMenu.css';

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => (
  <div className="SideMenu" data-testid="SideMenu">
    SideMenu Component
  </div>
);

export default SideMenu;
