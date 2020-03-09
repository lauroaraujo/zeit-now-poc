import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

function NextApp({ Component, pageProps, lang }) {
  i18nInit(lang)

  return (
    <Component {...pageProps} />
  )
}

NextApp.getInitialProps = async function({ Component, ctx }) {
  const { lang } = ctx.query || 'en'

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) || {}
  }

  return {
    pageProps,
    lang
  }
}

function i18nInit(lang) {
  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'About': 'About',
          'I\'m a POC page!': 'I\'m a POC page!',
          'Welcome to React': 'Welcome to React and react-i18next',
          'Batman TV Shows': 'Batman TV Shows'
        }
      },
      fr: {
        translation: {
          'About': 'Sur',
          'I\'m a POC page!': 'Je suis une page POC!',
          'Welcome to React': 'Bienvenue dans React et react-i18next',
          'Batman TV Shows': 'Séries télévisées Batman'
        }
      }
    },
    lng: lang,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })
}

export default NextApp
