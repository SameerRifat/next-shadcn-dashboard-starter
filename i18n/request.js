// i18n/request.js
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

// export const SUPPORTED_LOCALES = ['en', 'es', 'pt', 'fr', 'it', 'de', 'nl', 'ur'];
export const SUPPORTED_LOCALES = ['en', 'ur'];
export const DEFAULT_LOCALE = 'en';

/**
 * RTL_LOCALES — locales that require right-to-left layout.
 * Extend this array when adding future RTL languages (ar, he, fa, etc.).
 */
export const RTL_LOCALES = ['ur'];

/**
 * getDirection — returns "rtl" or "ltr" for a given locale code.
 * Pure function, no side effects, safe to call in Server Components.
 *
 * @param {string} locale
 * @returns {"ltr"|"rtl"}
 */
export function getDirection(locale) {
    return RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
}

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const raw = cookieStore.get('NEXT_LOCALE')?.value;
    const locale = SUPPORTED_LOCALES.includes(raw) ? raw : DEFAULT_LOCALE;

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});