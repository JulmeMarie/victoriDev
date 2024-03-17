import React, { FC } from 'react';
import './TutorialCategory.css';

interface TutorialCategoryProps {}

const TutorialCategory: FC<TutorialCategoryProps> = () => (
  <div className="TutorialCategory" data-testid="TutorialCategory">
    TutorialCategory Component
  </div>
);

export default TutorialCategory;
