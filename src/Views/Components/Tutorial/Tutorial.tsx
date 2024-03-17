import React, { FC } from 'react';
import './Tutorial.css';

interface TutorialProps {}

const Tutorial: FC<TutorialProps> = () => (
  <div className="Tutorial" data-testid="Tutorial">
    Tutorial Component
  </div>
);

export default Tutorial;
