import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScrollTop from './ScrollTop';

describe('<ScrollTop />', () => {
  test('it should mount', () => {
    render(<ScrollTop />);
    
    const scrollTop = screen.getByTestId('ScrollTop');

    expect(scrollTop).toBeInTheDocument();
  });
});