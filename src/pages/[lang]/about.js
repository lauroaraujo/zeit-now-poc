import { useTranslation } from "react-i18next"

import PageLayout from '../../components/PageLayout'

export default function AboutPage() {

  const { t } = useTranslation();

  return (
    <PageLayout>
      <h1>{t('About')}</h1>
      <article>
        {t('I\'m a POC page!')}
      </article>
    </PageLayout>
  )
}
