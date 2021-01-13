import { useContext } from 'react';

import { IntlContext } from './Context';
import { TranslateUtils } from '../types';
import { get } from '../utils';

export function useIntl(): TranslateUtils {
  const context = useContext(IntlContext);

  if (!context) {
    throw new Error('useIntl can not be called outside IntlProvider');
  }

  return {
    lang: context.locale,
    t: (key, params) => {
      const translatedKey = get(context.translate, [key, context.locale], key);
      if (!params) {
        return translatedKey;
      }
      return Object.entries(params).reduce(
        (acc, [param, paramValue]) => acc.replace(new RegExp(`{\\s*${param}\\s*}`, 'g'), paramValue),
        translatedKey,
      );
    },
  };
}
