import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VisitorStatistic from './VisitorStatistic';

describe('<VisitorStatistic />', () => {
  test('it should mount', () => {
    render(<VisitorStatistic />);
    
    const visitorStatistic = screen.getByTestId('VisitorStatistic');

    expect(visitorStatistic).toBeInTheDocument();
  });
});