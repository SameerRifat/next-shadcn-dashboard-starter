import createNextIntlPlugin from 'next-intl/plugin';

// next-intl plugin: auto-discovers i18n/request.js at the project root.
// No path argument is needed when the file sits at ./i18n/request.js.
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
