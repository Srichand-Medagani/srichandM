import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Srichand Medagani</h2>
        <p>
          <a href="mailto:srichandmedagani17@gmail.com">srichandmedagani17@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Srichand. I am a{' '}
        <a href="https://umbc.edu/">University of Maryland Baltimore County</a> graduate,
        Alumni at{' '}
        <a href="https://sreenidhi.edu.in/">Sreenidhi Institute of Science and Technology</a>. I have
        completed my masters in Computer Science and seeking opportunities for industrial experience.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Srichand Medagani <Link to="/">srichandM.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
