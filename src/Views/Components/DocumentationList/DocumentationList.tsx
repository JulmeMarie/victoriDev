import React, { FC } from 'react';
import './DocumentationList.css';

interface DocumentationListProps {}

const DocumentationList: FC<DocumentationListProps> = () => (
  <div className="DocumentationList" data-testid="DocumentationList">
    DocumentationList Component
  </div>
);

export default DocumentationList;
