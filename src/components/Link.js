import NextLink from 'next/link'
import { getI18n } from 'react-i18next'

const Link = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch
}) => {
  const i18nHRef = getI18nHRefProp(href)
  const i18nAs = getI18nAsProp(as, href)
  // console.log(111, i18nAs)
  // console.log(112, i18nHRef)

  console.log(2, i18nHRef)
  return (
    <NextLink
      as={i18nAs}
      href={i18nHRef}
      // replace={replace}
      // scroll={scroll}
      // shallow={shallow}
      // passHref={passHref}
      // prefetch={prefetch}
    >
      {children}
    </NextLink>
  )
}

const getI18nHRefProp = (href) => {
  const i18n = getI18n()

  if (href.startsWith('/')) {
    return `/[lang]${href}`
  }

  return href
}

const getI18nAsProp = (as, href) => {
  const i18n = getI18n()

  if (!as && href.startsWith('/')) {
    return `/${i18n.language}${href}`
  }

  if (as && !['/en/', '/fr/'].includes(as.substring(0, 4))) {
    return `/${i18n.language}${as}`
  }

  return as
}

export default Link
