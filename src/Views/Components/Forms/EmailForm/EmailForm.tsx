import React, { FC } from 'react';
import { EActionType } from '../../../../utils/global-types';
import './EmailForm.css';

interface EmailFormProps {
  action: EActionType
}

const EmailForm: FC<EmailFormProps> = ({ action }) => {

  return (
    <div className="EmailForm" data-testid="EmailForm">
      EmailForm Component
    </div>
  );
}

export default EmailForm;
