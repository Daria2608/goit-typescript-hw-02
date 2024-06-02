import React from 'react';
import css from './LoadMoreBtn.module.css'
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button onClick={onClick} className={css.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;