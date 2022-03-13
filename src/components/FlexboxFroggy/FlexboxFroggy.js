import React from 'react';
import SidebarLayout from '../LeftSide/SidebarLayout/SidebarLayout';
import ViewBoard from '../RightSide/ViewBoard';
import classes from './FlexboxFroggy.module.css';


function FlexboxFroggy() {
  return (
    <div className={classes.diva}>
      <SidebarLayout/>
      <ViewBoard />
    </div>
  );
}

export default FlexboxFroggy;