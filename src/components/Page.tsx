import { NextSeo } from "next-seo"

interface Props {
  children: React.ReactNode
  description: string
  title: string
}

export default function Page(props: Props) {
  const devMode = process.env.NODE_ENV === 'development'
  const { children, description, title } = props

  return (
    <>
      {devMode && <div className="debug-screens" />}
      <div />
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description, }}
      />
      <main>{children}</main>
    </>
  )
}
