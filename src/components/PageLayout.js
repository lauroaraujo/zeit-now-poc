import { getI18n } from 'react-i18next'

import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export default function PageLayout ({ children }) {
  const lang = getI18n().language
  return (
    <div style={layoutStyle}>
      <Header lang={lang}/>
      { children }
    </div>
  )
}
