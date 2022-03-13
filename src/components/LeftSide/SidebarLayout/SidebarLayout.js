import React from 'react';
import classes from './SidebarLayout.module.css';

import LevelSwitcher from '../LevelSwitcher/LevelSwitcher';
import Instructions from '../Instructions/Instructions';
import Editor from '../Footer/Editor';


function SidebarLayout() {
  return (
    <section className={classes.sidebar}>
      <header className={classes.header}>
        <div>
          <h1 className={classes.title}>Flexbox Froggy</h1>
        </div>
        <LevelSwitcher />
      </header>
      <Instructions />
      <Editor/>
    </section>
  );
}

export default SidebarLayout;
