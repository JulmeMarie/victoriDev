import React, { FC } from 'react';
import './ProjectList.css';

interface ProjectListProps {}

const ProjectList: FC<ProjectListProps> = () => (
  <div className="ProjectList" data-testid="ProjectList">
    ProjectList Component
  </div>
);

export default ProjectList;
