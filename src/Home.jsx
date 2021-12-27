import logo from './logo.svg';
import './Home.css';
import { Trans, useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Home = () => {
  const { t, i18n } = useTranslation();

  const date = new Date();
  const dateFormatted = new Intl.DateTimeFormat(i18n.language).format(date);

  return (
    <div className="Home">
      <LanguageSwitcher />

      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />

        <p>
          {t('date')} {dateFormatted}
        </p>

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
          {t('learnReact')}
        </a>
      </header>
    </div>
  );
}

export default Home;
