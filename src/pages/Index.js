import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Srichand Medagani's personal website. Alumni at University of Maryland Baltimore County, "
      + 'Exploring life and technology to make myself felicitous'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            My personal portfolio built as a react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to Explore{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/Srichand-Medagani">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
