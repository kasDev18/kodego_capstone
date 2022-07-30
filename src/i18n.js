import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './translations/en.json';
import common_th from './translations/cn.json';

const resources = {
    en: {
        translation: common_en
    },
    cn: {
        translation: common_th
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;