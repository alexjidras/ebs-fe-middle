import React, { useState } from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'ebs-intl';

import { Test } from './Test';
import translate from './res/translate.json';

console.log(translate)

const App = () => {
  const [language, setLanguage] = useState(document.documentElement.lang);

  return (
    <IntlProvider translate={translate} locale={language}>
      <Test setLanguage={setLanguage} />
    </IntlProvider>
  );
};

render(<App />, document.getElementById('root'));
