import Link from 'next/link'
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch'

import PageLayout from '../components/PageLayout'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const PostLink = ({ id }) => (
  <li>
    <Link href={`/posts/[id]`} as={`/posts/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
)

function IndexPage () {
  // const { data, error } = useSWR('/api/randomQuote', fetcher);
  const { data, error } = useSWR('/api/version', fetcher);
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const version = data?.version;

  if (error) return 'Failed to fetch version.';

  return (
    <PageLayout>
      <h1>Next JS and Zeit Now!</h1>
      <article>
        <p>Serverless NextJS POC</p>
        <p>Integration with the master branch is bugged.</p>
        <p>Actually, seems to be by design, unfortunately</p>
        <p>Github Actions WORKS!</p>
        <div>
          <code>FE BUILD: {process.env.BUILD_VERSION}</code>
        </div>
        <div>
          <code>API VERSION: {version}</code>
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