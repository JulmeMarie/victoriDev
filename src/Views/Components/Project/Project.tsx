import React, { FC } from 'react';
import './Project.css';

interface ProjectProps {}

const Project: FC<ProjectProps> = () => (
  <div className="Project" data-testid="Project">
    Project Component
  </div>
);

export default Project;
