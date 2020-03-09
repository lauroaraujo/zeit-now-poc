import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import { useTranslation, getI18n } from "react-i18next"

import Link from '../../components/Link'
import PageLayout from '../../components/PageLayout'

function fetcher(url) {
  return fetch(url).then(r => r.json())
}

const PostLink = ({ id }) => {
  return (
    <li>
      <Link href={`/posts/[id]`} as={`/posts/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  )
}

function IndexPage () {
  const lang = getI18n().language
  const router = useRouter()

  const { data, error } = useSWR('/api/version', fetcher)
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const version = data?.version

  const { t } = useTranslation()

  if (error) return 'Failed to fetch version.'

  return (
    <PageLayout>
      <h1>Next JS and Zeit Now!</h1>
      {t('Welcome to React')}
      <header>lang: {lang}</header>
      <article>
        <p>Serverless NextJS POC</p>
        <p>Translations right now opt out of static optimization...</p>
        <div>
          <h4>Env Variables (Secrets) Test - Build and Runtime</h4>
          <div>
            <code>FE BUILD: {process.env.BUILD_VERSION}</code>
          </div>
          <div>
            <code>API VERSION: {version}</code>
          </div>
        </div>
      </article>

      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </PageLayout>
  )
}

export default IndexPage