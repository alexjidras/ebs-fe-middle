import React from 'react';
import { useIntl, languages } from 'ebs-intl';

export const Test = ({ setLanguage }) => {
    const { t } = useIntl();
    return (
        <div>
            {languages.map((language) => (
                <button
                    type="button"
                    onClick={() => setLanguage(language)}
                    key={language}
                >
                {language}
                </button>
            ))}
            <p>{t('greeting', { name: 'Alex' })}</p>
        </div>
    )
}
