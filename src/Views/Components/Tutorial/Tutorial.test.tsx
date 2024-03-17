import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tutorial from './Tutorial';

describe('<Tutorial />', () => {
  test('it should mount', () => {
    render(<Tutorial />);
    
    const tutorial = screen.getByTestId('Tutorial');

    expect(tutorial).toBeInTheDocument();
  });
});