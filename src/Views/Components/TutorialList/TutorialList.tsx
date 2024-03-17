import React, { FC } from 'react';
import './TutorialList.css';

interface TutorialListProps {}

const TutorialList: FC<TutorialListProps> = () => (
  <div className="TutorialList" data-testid="TutorialList">
    TutorialList Component
  </div>
);

export default TutorialList;
