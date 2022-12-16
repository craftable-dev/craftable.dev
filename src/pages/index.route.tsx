import Page from 'components/Page'
import Logo from 'components/Logo'

const seo = {
  title: 'Craftable offers elegant, pragmatic, and transparently-priced Craft CMS Development',
  description: 'Craftable offers elegant, pragmatic, and transparently-priced Craft CMS Development',
}

export default function Custom500() {
  return (
    <Page {...seo}>
      <div className="w-screen flex items-center justify-center">
        <Logo className="w-48 text-white" />
      </div>
    </Page>
  )
}
