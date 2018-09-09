module.exports = {
  base: '/reading-time-estimator/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Reading Time Estimator',
      description: 'A medium\'s like reading time estimator with internationalization support.'
    },
    '/fr/': {
      lang: 'fr-CA',
      title: 'Reading Time Estimator',
      description: 'Un estimateur de temps de lecture avec prise en charge de l\'internationalisation comme sur medium.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css', integrity: 'sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4', crossorigin: 'anonymous' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'lbenie/reading-time-estimator',
    editLinks: true,
    docsDir: 'vuepress',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Try it!',
            link: '/try/'
          }
        ]
      },
      '/fr/': {
        label: 'Français',
        selectText: 'Langues',
        editLinkText: 'Modifier sur github',
        lastUpdated: 'Dernière mise à jour',
        serviceWorker: {
          updatePopup: {
            message: "De nouveaux contenus sont disponibles.",
            buttonText: "Rafraîchir"
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/fr/guide/'
          },
          {
            text: 'Essayez-le!',
            link: '/fr/try/'
          }
        ]
      }
    }
  }
}
