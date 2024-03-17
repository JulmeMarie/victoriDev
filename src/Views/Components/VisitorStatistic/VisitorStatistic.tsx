import React, { FC } from 'react';
import './VisitorStatistic.css';

interface VisitorStatisticProps {}

const VisitorStatistic: FC<VisitorStatisticProps> = () => (
  <div className="VisitorStatistic" data-testid="VisitorStatistic">
    VisitorStatistic Component
  </div>
);

export default VisitorStatistic;
