import Banner from './Banner'
import Footer from './Footer'
import Meta from './Meta'
import CustomFooter from "../CustomFooter";
import Nav from "./Nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Banner preview={preview} />*/}
        <Nav />
        <main>{children}</main>
      </div>
      {/*<Footer />*/}
      <CustomFooter />
    </>
  )
}
