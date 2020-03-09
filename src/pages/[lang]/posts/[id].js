import { useRouter } from 'next/router'

import PageLayout from '../../../components/PageLayout'

export default function Post () {
  const router = useRouter()

  return (
    <PageLayout>
        <h1>{router.query.id}</h1>
        <article>
          <p>Post content</p>
        </article>
    </PageLayout>
  )
}
