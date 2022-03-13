import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import classes from './LevelSwitch.module.css';
import { gameActions } from '../../../store';

import {
  LeftTriangle,
  LevelIndicator,
  LevelItem,
  RightTriangle,
} from './levelCounter';

const LevelSwitcher = () => {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.game.currentLevel);
  const levels = useSelector((state) => state.game.currentLevels);

  const [isShow, setIsShow] = useState(false);

  const nextLevel = (level) => {
    dispatch(gameActions.currentState(level));
  };

  const incrementLevel = () => {
    dispatch(gameActions.currentState(current + 1));
  };

  const decrementLevel = () => {
    dispatch(gameActions.currentState(current - 1));
  };

  const showHandler = () => {
    setIsShow((prevLevel) => (prevLevel = !prevLevel));
  };

  const renderLevels = () => {
    return (
      <div className={`${classes.levelsWrapper} ${classes.tooltip}`}>
        <div className={classes.levels}>
          {levels.map((item) => {
            return (
              <LevelItem item={item} nextLevel={nextLevel}>
                {item.level}
              </LevelItem>
            );
          })}
        </div>
        <div className={classes.labelReset}>Сбросить</div>
      </div>
    );
  };

  return (
    <div className={classes['level-counter']}>
      <LeftTriangle decrementLevel={decrementLevel} />
      <LevelIndicator current={current} showHandler={showHandler} />
      <RightTriangle IncrementLevel={incrementLevel} />
      {isShow && renderLevels()}
    </div>
  );
};

export default LevelSwitcher;
