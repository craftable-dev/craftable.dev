import Favicons from 'components/Favicons'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
  description: string
  title: string
}

const devMode = process.env.NODE_ENV === 'development'

export default function Page(props: Props) {
  const router = useRouter()
  const { children, description, title } = props

  return (
    <>
      {devMode && <div className="debug-screens" />}
      <div />
      <Head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://craftable.dev/assets/og.png" />
        <meta property="og:site_name" content="Craftable" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://craftable.dev/assets/og.png"
        />
        <meta property="og:image:alt" content="Craftable Logo" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <link
          rel="canonical"
          href={`https://craftable.dev${router.pathname}`}
        />
        <Favicons />
      </Head>
      <main>{children}</main>
    </>
  )
}
