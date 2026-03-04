// app/actions.js
'use server'

import { cookies } from 'next/headers';

// Keep in sync with SUPPORTED_LOCALES in i18n/request.js
const SUPPORTED_LOCALES = ['en', 'ur'];
// const SUPPORTED_LOCALES = ['en', 'es', 'pt', 'fr', 'it', 'de', 'nl', 'ur'];

export async function setLocale(locale) {
    if (!SUPPORTED_LOCALES.includes(locale)) return;

    const cookieStore = await cookies();
    cookieStore.set('NEXT_LOCALE', locale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
    });
}