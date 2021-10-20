import React from 'react';

import classes from './styles.module.scss';

export default function Spinner() {
  return (
    <div className={classes.Spinner}>
      <div className={classes.spinner}>
        <div />
        <div />
      </div>
    </div>
  );
}
