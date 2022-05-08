import React from "react"
import Header2 from "./header-v2"
import Header4 from "./header-v4"
import HeaderBootstrap from './header--bootstrap'
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div data-is-root-path={isRootPath}>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-16WL9W89J0"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-16WL9W89J0');
          `}
        </script>
      </Helmet>
      {/* <Header4></Header4> */}
      <HeaderBootstrap></HeaderBootstrap>
      <main className="global-wrapper">{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
