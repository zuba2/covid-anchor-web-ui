import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
  return(
    <div className="layout">
      <Head>
          <title>{props.title}</title>
          <link rel="stylesheet" href="/css/global.css"/>
      </Head>
      
      <Navbar/>
      {/* Navbar */}

      {/* Content */}
      {props.children}

  <style jsx>{`
  .layout{
    width: 100%;
    height: 100vh;
    background-color: var(--color-dim-white);

    display: flex;
  }
  `}</style>
    </div>
    );
}


export default Layout;