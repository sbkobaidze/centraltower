import React, { ReactNode } from 'react'
import Nav from '../nav/Nav'
import { NavbarDocumentData } from '../../../prismicio-types'
const Layout = ({children,headerData,}:{children:ReactNode,headerData:NavbarDocumentData,}) => {
  return (
      <div className='bg-[#005F4A]'>
          <Nav headerData={headerData} />
          {children}
    </div>
  )
}

export default Layout