import React, { ReactElement } from "react"
import Header from "./header/Header"
import BottomHeader from "./header/BottomHeader"
import Footer from "./footer/Footer"

interface Props {
  children: ReactElement
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
