import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';
import './HeaderMenu.css';

interface HeaderMenuProps { }

const HeaderMenu: FC<HeaderMenuProps> = () => {
  const dispatch = useDispatch();
  const logIn = useSelector((state: AppState) => state.appReducer.logIn);



  return (
    <div className="HeaderMenu" data-testid="HeaderMenu">
      HeaderMenu Component
    </div>
  );
}

export default HeaderMenu;
