import { createContext } from 'react';

import { IntlContextValue } from '../types';

export const IntlContext = createContext<IntlContextValue>({
  translate: {},
  locale: 'en',
});
