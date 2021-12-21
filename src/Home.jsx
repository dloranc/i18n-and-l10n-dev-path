import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { Trans, useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          <Trans>
            Edit <code>src/Home.tsx</code> and save to reload.
          </Trans>
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Learn React')}
        </a>
      </header>
    </div>
  );
}

export default Home;
