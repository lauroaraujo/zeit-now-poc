import Link from 'next/link'

import PageLayout from '../components/PageLayout'

const PostLink = ({ id }) => (
  <li>
    <Link href={`/posts/[id]`} as={`/posts/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
)

export default function Index () {
  return (
    <PageLayout>
      <h1>Next JS and Zeit Now!</h1>
      <article>
        <p>Serverless NextJS POC</p>
        <p>Git integration change</p>
      </article>

      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </PageLayout>
  )
}