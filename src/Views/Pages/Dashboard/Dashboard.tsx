import React, { FC } from 'react';
import './Dashboard.css';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className="Dashboard" data-testid="Dashboard">
    Dashboard Component
  </div>
);

export default Dashboard;
