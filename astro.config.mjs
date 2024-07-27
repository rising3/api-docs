import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My API',
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en',
      },
      /*
      'en': {
        label: 'English',
        lang: 'en',
      },
      */
      'ja': {
        label: '日本語',
        lang: 'ja',
      },
    },
    customCss: ['./src/styles/tailwind.css'],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Introduction',
      translations: {
        'ja': 'イントロダクション',
      },
      slug: 'index'

    }, {
      label: 'Authentication',
      slug: 'authentication'
    }, {
      label: 'Connected Accounts',
      slug: 'connectedaccounts'
    }, {
      label: 'Errors',
      slug: 'errors'
    }, {
      label: 'Pagination',
      slug: 'pagination'
    }, {
      label: 'Core Resources',
      autogenerate: {
        directory: 'core'
      }
    },
    /*
    {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        slug: 'guides/example'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }
    */
    ]
  }), tailwind({
    applyBaseStyles: false
  })]
});