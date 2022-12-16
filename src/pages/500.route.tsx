import Page from 'components/Page'

const seo = {
  title: 'Something went wrong',
  description: 'Something went wrong on the server. Please try again.',
}

export default function Custom500() {
  return (
    <Page {...seo}>
    </Page>
  )
}
