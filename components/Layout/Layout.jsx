import Banner from './Banner'
import Footer from './Footer'
import Meta from './Meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Banner preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
