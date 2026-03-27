import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MailCraft',
      description: 'Open source transactional email — ship emails, not templates',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/mailcraft-cloud/mailcraft' },
        { icon: 'x.com', label: 'Twitter', href: 'https://twitter.com/mailcraft' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Quickstart', slug: 'getting-started/quickstart' },
            { label: 'Core Concepts', slug: 'getting-started/concepts' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Brand Extraction', slug: 'guides/brand-extraction' },
            { label: 'Email Types', slug: 'guides/email-types' },
            { label: 'Prompts', slug: 'guides/prompts' },
            { label: 'Actions (CTA Buttons)', slug: 'guides/actions' },
            { label: 'Email Providers', slug: 'guides/providers' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Overview', slug: 'api-reference/overview' },
            { label: 'Authentication', slug: 'api-reference/authentication' },
            { label: 'Send Email', slug: 'api-reference/send' },
            { label: 'Errors', slug: 'api-reference/errors' },
          ],
        },
        {
          label: 'SDKs',
          items: [
            { label: 'Overview', slug: 'sdks/overview' },
            { label: 'Node.js', slug: 'sdks/node' },
            { label: 'Laravel', slug: 'sdks/laravel' },
          ],
        },
        {
          label: 'Self-Hosting',
          items: [
            { label: 'Overview', slug: 'self-hosting/overview' },
            { label: 'Docker', slug: 'self-hosting/docker' },
            { label: 'Environment Variables', slug: 'self-hosting/environment' },
          ],
        },
      ],
    }),
  ],
});
