import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Instructions.module.css';

function Instructions() {
  const current = useSelector((state) => state.game.currentLevel);
  const levels = useSelector((state) =>
    state.game.currentLevels.filter((item) => item.level === current)
  );

  return (
    <div className={classes.instructions}>
      {levels.map((item) => (
        <React.Fragment key={item}>{item.questionDescription} </React.Fragment>
      ))}
    </div>
  );
}

export default Instructions;
