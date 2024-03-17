import React, { FC } from 'react';
import { EDocumentationType } from '../../../utils/global-types';
import './Documentation.css';

interface DocumentationProps {
  type: EDocumentationType
}

const Documentation: FC<DocumentationProps> = ({ type }) => {


  return (
    <div className="Documentation" data-testid="Documentation">
      Documentation Component
    </div>
  );
}

export default Documentation;
