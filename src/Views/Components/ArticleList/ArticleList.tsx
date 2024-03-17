import React, { FC } from 'react';
import './ArticleList.css';

interface ArticleListProps {}

const ArticleList: FC<ArticleListProps> = () => (
  <div className="ArticleList" data-testid="ArticleList">
    ArticleList Component
  </div>
);

export default ArticleList;
