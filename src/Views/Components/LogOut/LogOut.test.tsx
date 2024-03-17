import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogOut from './LogOut';

describe('<LogOut />', () => {
  test('it should mount', () => {
    render(<LogOut />);
    
    const logOut = screen.getByTestId('LogOut');

    expect(logOut).toBeInTheDocument();
  });
});