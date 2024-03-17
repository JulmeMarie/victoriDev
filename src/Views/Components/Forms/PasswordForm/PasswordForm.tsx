import React, { FC } from 'react';
import { EActionType } from '../../../../utils/global-types';
import './PasswordForm.css';

interface PasswordFormProps {
  action: EActionType
}

const PasswordForm: FC<PasswordFormProps> = ({ action }) => {

  return (
    <div className="PasswordForm" data-testid="PasswordForm">
      PasswordForm Component
    </div>
  );
}

export default PasswordForm;
