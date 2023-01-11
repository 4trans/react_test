import { Dispatch, SetStateAction } from "react";

export interface I18nContextProps {
    locale: LocaleEnum,
    setLocale: Dispatch<SetStateAction<LocaleEnum>>,
}

export enum LocaleEnum {
    Czech = 'cs',
    English = 'en',
}