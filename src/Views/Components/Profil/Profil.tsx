import React, { FC } from 'react';
import './Profil.css';

interface ProfilProps {}

const Profil: FC<ProfilProps> = () => (
  <div className="Profil" data-testid="Profil">
    Profil Component
  </div>
);

export default Profil;
