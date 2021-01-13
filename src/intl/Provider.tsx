import React, { useEffect } from 'react';

import { IntlContext } from './Context';
import { languages } from './languages';
import { IntlProviderProps } from '../types';
import { get } from '../utils';

export const IntlProvider = ({ translate, locale, children }: IntlProviderProps) => {
  useEffect(() => {
    Object.entries(translate).forEach(([translationKey, translations]) => {
      languages.forEach((language) => {
        if (!get(translations, [language])) {
          console.warn(`Missing translation key ${translationKey} for language ${language}`);
        }
      });
    });
  }, [JSON.stringify(translate)]);
  return (
    <IntlContext.Provider value={{ translate, locale }}>
      {children}
    </IntlContext.Provider>
  );
};
