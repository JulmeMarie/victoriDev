import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DocumentationList from './DocumentationList';

describe('<DocumentationList />', () => {
  test('it should mount', () => {
    render(<DocumentationList />);
    
    const documentationList = screen.getByTestId('DocumentationList');

    expect(documentationList).toBeInTheDocument();
  });
});