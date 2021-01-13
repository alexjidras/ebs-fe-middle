import { ReactNode } from 'react';

export type Locale = 'en' | 'ru' | 'ro';

export interface Translate {
  [translationKey: string]: {
    [language: string]: string;
  };
}

export interface TranslateUtils {
  lang: Locale;
  t: (key: string, params?: { [key: string]: string }) => string;
}

export interface IntlContextValue {
  translate: Translate;
  locale: Locale;
}

export interface IntlProviderProps {
  readonly translate: Translate;
  readonly locale: Locale;
  readonly children?: ReactNode;
}
