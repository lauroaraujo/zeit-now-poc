import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import PageLayout from '../../components/PageLayout'

const Index = ({ shows }) => (
  <PageLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href="/batman/show/[id]" as={`/batman/show/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </PageLayout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
