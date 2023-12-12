import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from './i18n';

const HomePage = () => {
  i18n.setLanguage('es')
  
  return (
    <React.StrictMode>
      <p>{i18n.t('hello-world')}</p>

      <p>{i18n.t('homepage.welcome')}</p>
    </React.StrictMode>
  );
};

ReactDOM.render(<HomePage />, document.getElementById('root'));
