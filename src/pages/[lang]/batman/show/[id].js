import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import PageLayout from '../../../../components/PageLayout'

const Post = ({ show }) => (
  <PageLayout>
    <h1>{show.name}</h1>
    <p>{show.summary}</p>
    {show.image ? <img src={show.image.medium.replace(/^http:/, 'https:')} /> : null}
  </PageLayout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`)
  const sanitizedSummary = show.summary.replace(/<[/]?[pb]>/g, '')

  return { show: {
    ...show,
    summary: sanitizedSummary
  } }
}

export default Post;