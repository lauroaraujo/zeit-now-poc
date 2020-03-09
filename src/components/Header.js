import Link from '../components/Link'
import { useSSR } from 'react-i18next'

const linkStyle = {
  marginRight: 15
}

export default function Header({ lang }) {
  return (
    <header>
      <Link href='/'><a style={linkStyle}>Home</a></Link>
      <Link href='/about'><a style={linkStyle}>About</a></Link>
      <Link href='/batman'><a style={linkStyle}>Batman</a></Link>
    </header>
  )
}
