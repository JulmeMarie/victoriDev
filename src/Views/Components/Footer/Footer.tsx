import React, { FC } from 'react';
import './Footer.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer" data-testid="Footer">
    Footer Component
  </div>
);

export default Footer;
