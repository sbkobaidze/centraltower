import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Preloader = () => {
  return (
      <motion.div className="preloader flex justify-center  absolute  w-full items gap-2 items-center h-[100vh] bg-goldprimary z-50" initial={{opacity:1}} animate={{opacity:0,display:'none'}} exit={{opacity:1,display:'block'}}  transition={{duration:2, ease:"easeIn"}}>

        <div className='text-3xl font-bold text-black'>CENTRAL TOWER</div>  
      
      {/* <div
        className="spinner h-[150px] w-[150px]  "a
       
      >
        <img src='centraltower.png' />
        </div> */}
    </motion.div>
  );
};

export default Preloader;