import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export default function PageLayout (props) {
  const { lang } = props
  return (
    <div style={layoutStyle}>
      <Header lang={lang}/>
      { props.children }
    </div>
  )
}
