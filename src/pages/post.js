import { useRouter } from 'next/router'

import PageLayout from '../components/PageLayout'

function Content () {
  const router = useRouter()

  return (
    <>
    <h1>DEPRECATED</h1>
      <h1>{router.query.title}</h1>
      <article>
        <p>Post content</p>
      </article>
    </>
  )
}

export default function Post() {
  const router = useRouter()

  return (
    <PageLayout>
      <Content />
    </PageLayout>
  )
}
