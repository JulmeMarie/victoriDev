import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TutorialList from './TutorialList';

describe('<TutorialList />', () => {
  test('it should mount', () => {
    render(<TutorialList />);
    
    const tutorialList = screen.getByTestId('TutorialList');

    expect(tutorialList).toBeInTheDocument();
  });
});