import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const buttonClasses = lang => {
    return classNames('LanguageSwitcher-button', {
      'LanguageSwitcher-button--active': i18n.language === lang,
    });
  }

  return (
    <div className="LanguageSwitcher">
      {i18n.languages.sort().map(lang => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={buttonClasses(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher
