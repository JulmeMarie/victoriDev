import React, { FC } from 'react';
import './Article.css';

interface ArticleProps {}

const Article: FC<ArticleProps> = () => (
  <div className="Article" data-testid="Article">
    Article Component
  </div>
);

export default Article;
