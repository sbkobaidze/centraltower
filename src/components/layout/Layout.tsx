import React, { ReactNode } from 'react'
import Nav from '../nav/Nav'
import { NavbarDocumentData } from '../../../prismicio-types'
import {motion} from 'framer-motion'
import Footer from '../nav/Footer'
import { useRouter } from 'next/router'
import { Toaster } from "@/components/ui/toaster"

const Layout = ({ children, headerData, }: { children: ReactNode, headerData: NavbarDocumentData, }) => {

  const router = useRouter()
  return (
    <motion.div initial={{ opacity:0}} animate={{opacity:1}} transition={{duration:0.75,ease:"easeOut"}}>

    <div className={` ${router.pathname.includes('blog') ? 'bg-goldprimary  text-gray' : 'bg-[#005F4A]'} `}>
        <Nav headerData={headerData} />
        <Toaster />
        {children}
          <Footer />
      </div>
      </motion.div>

  )
}

export default Layout