import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profil from './Profil';

describe('<Profil />', () => {
  test('it should mount', () => {
    render(<Profil />);
    
    const profil = screen.getByTestId('Profil');

    expect(profil).toBeInTheDocument();
  });
});