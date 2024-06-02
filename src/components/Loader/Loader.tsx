import React from 'react';
import { Watch } from 'react-loader-spinner';
import css from './Loader.module.css'


const Loader: React.FC = () => {
  return (
    <div className={css.watch}>
      <Watch
        visible={true}
        height={80}
        width={80}
        radius={48}
        color="#4fa94d"
        ariaLabel="watch-loading"
      />
    </div>
  );
};

export default Loader;