import React from 'react';
import Header from "../Header";
import Aside from "../Aside";

const Layout = ({children}) => {
  return (
    <>
      <main className="main">
        <Aside />
        <div className="right-side">
          <Header />
          <div className="content">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout;