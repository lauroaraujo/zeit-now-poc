import { useTranslation } from "react-i18next"

import PageLayout from '../../components/PageLayout'

export default function AboutPage({ lang }) {
  const { t } = useTranslation();

  return (
    <PageLayout lang={lang}>
      <h1>{t('About')}</h1>
      <article>
        {t('I\'m a POC page!')}
      </article>
    </PageLayout>
  )
}

AboutPage.getInitialProps = async function(ctx) {
  const { lang } = ctx.query || 'en'
  return { lang }
}
