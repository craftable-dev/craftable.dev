import Page from 'components/Page'

const seo = {
  title: 'Page Not Found',
  description: 'No page found. Please try again.',
}

export default function Custom404() {
  return (
    <Page {...seo}>
    </Page>
  )
}
