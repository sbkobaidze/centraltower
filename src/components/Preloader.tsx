import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Preloader = () => {
  return (
      <motion.div className="preloader flex justify-center items gap-2 items-center h-[100vh] bg-[#3D3D3D] z-50" initial={{y:0, opacity:1}} animate={{y:-2000,opacity:0.2, transition:{duration:3,delay:0.3} }}>

        <div className='text-3xl font-bold text-goldprimary'>CENTRAL TOWER</div>  
      
      {/* <div
        className="spinner h-[150px] w-[150px]  "a
       
      >
        <img src='centraltower.png' />
        </div> */}
    </motion.div>
  );
};

export default Preloader;