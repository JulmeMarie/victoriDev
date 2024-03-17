import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TutorialCategory from './TutorialCategory';

describe('<TutorialCategory />', () => {
  test('it should mount', () => {
    render(<TutorialCategory />);
    
    const tutorialCategory = screen.getByTestId('TutorialCategory');

    expect(tutorialCategory).toBeInTheDocument();
  });
});