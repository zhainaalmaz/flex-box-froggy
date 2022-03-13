import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../store';
import classes from './ViewBoard.module.css';

function ViewBoard() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.game.currentLevel);
  const level = useSelector((state) =>
    state.game.currentLevels.find((item) => item.level === current)
  );
  console.log(level.answer);
  const style = useSelector((state) => state.game.value);

  const froggyRef = useRef();

  useEffect(() => {
     if(level.answer.split('').sort().join('').trim() === style.split('').sort().join('').trim()) {
      dispatch(gameActions.complete());
    } else {
      dispatch(gameActions.notComplete())
    }
    froggyRef.current.style = style;
  }, [style]);

  const froggys = () => {
    return level.colors.map((color) => (
      <Froggy key={color} className={classes[color]} />
    ));
  };

  const lilypads = () => {
    return level.colors.map((color) => (
      <Lilypad key={color} className={classes[color]} />
    ));
  };

  return (
    <div className={classes.view}>
      <div className={classes.board}>
        <div ref={froggyRef} className={classes.pond}>
          {froggys()}
        </div>
        <div className={classes.background} style={level.lilypad}>
          {lilypads()}
        </div>
      </div>
    </div>
  );
}

const Froggy = ({ className }) => {
  return (
    <div className={`${classes.frog} ${className}`}>
      <div className={classes.bg}></div>
    </div>
  );
};

const Lilypad = ({ className }) => {
  return (
    <div className={`${classes.lilypad} ${className}`}>
      <div className={classes.bg}></div>
    </div>
  );
};

export default ViewBoard;
