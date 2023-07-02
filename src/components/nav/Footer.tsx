import React from 'react'
import { Facebook,Instagram,Phone } from 'lucide-react'
const Footer = () => {
  return (
      <div className='w-full h-52  border-t-2 border-white'>
          <div className='container flex justify-center items-center h-full flex-col  gap-3'>
        <h2 className='font-bold text-5xl text-white'>CONTACT US</h2>
        <p className='text-white'>info@centraltower.ge

</p>
              <div className='text-white flex gap-3'>
                  <Facebook /> 
          <Instagram />
       <a href='tel:551080912'>   <Phone /></a>
              </div>
          </div>
          
    </div>
  )
}

export default Footer