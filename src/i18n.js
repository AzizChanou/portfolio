import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

export const allLocales = [import.meta.env.VITE_APP_I18N_LOCALE, import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE];


export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VITE_APP_I18N_LOCALE,
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE,
    availableLocales: [import.meta.env.VITE_APP_I18N_LOCALE, import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE],
    messages: messages,
});


export async function setLocale(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
        const messages = await loadLocale(locale);

        if (messages === undefined) {
            return;
        }

        i18n.global.setLocaleMessage(locale, messages);
    }

    localStorage.setItem('lang', locale);
    i18n.global.locale.value = localStorage.getItem('lang');
    document.getElementById('document').setAttribute('lang', localStorage.getItem('lang'));
}

async function loadLocale(locale) {
    return fetch(`./locales/${locale}.json`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Something went wrong!");
        })
        .catch((error) => {
            console.error(error);
        });
}
