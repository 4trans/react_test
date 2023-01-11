import React, { useEffect, useState } from 'react';
import { I18nProvider as LinguiI18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { I18nContext } from './context';
import { LocaleEnum } from "./types";

// import plural rules for all locales
import { en, cs } from "make-plural";

i18n.loadLocaleData({
    en: { plurals: en },
    cs: { plurals: cs },
})

type I18nProviderProps = {
    children: JSX.Element
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    const [ locale, setLocale ] = useState(LocaleEnum.English);

    useEffect(() => {
        // Dynamically load the catalogs
        import(`../locales/${locale}/messages`).then(module => {

            const messages = module.messages;

            console.log('Messages', messages)

            i18n.load(locale, messages)
            i18n.activate(locale)
        });
    }, [ locale ])

    return (
        <I18nContext.Provider
            value={{
                locale,
                setLocale
            }}
        >
            <LinguiI18nProvider i18n={i18n}>
                {children}
            </LinguiI18nProvider>
        </I18nContext.Provider>
    );
};