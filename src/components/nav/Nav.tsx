"use client";
import React, { useState,useEffect } from "react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

import { Menu } from "lucide-react";
import { asText } from "@prismicio/client";
import { NavbarDocumentData } from "../../../prismicio-types";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PrismicNextImage,PrismicNextLink } from "@prismicio/next";
import Preloader from "../Preloader";
import { Facebook,Instagram } from "lucide-react";

const Nav = ({ headerData }: { headerData: NavbarDocumentData }) => {
  const [currentHover, setCurrentHover] = useState("");
  const menuControls = useAnimationControls();
  const navigation = [
    headerData.contact,
    headerData.about,
    headerData.projects,
  ];

  const router = useRouter();
    const { locales, defaultLocale,locale:activeLocale,pathname } = router;
    const [isLoading, setIsLoading] = useState(true); 
  


    useEffect(() => {
            // Simulating some async initialization task
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    , []);
 
  const x = useMotionValue(-2000);
  const handleAnimation = () => {
    if (x.get() < 0) {
      menuControls.start({ y: 0 });
      x.set(0);
    } else {
      menuControls.start({ y: -2000 });
      x.set(-2000);
    }
  };

  const changeLanguage = (val: string) => {
    router.push(pathname, pathname, { locale: val });
  };
  const displayNavigation = navigation.map((item, index) => {
    return (
      <motion.div
        key={index}
        className="font-semibold text-xl  relative cursor-pointer hidden md:block "
        id={asText(item)}
        onHoverStart={(e) => {
          //@ts-ignore
          setCurrentHover(e.target.id);
        }}
        onHoverEnd={(e) => {
          setCurrentHover("");
        }}
      >
        {asText(item)}
        {currentHover === asText(item) && (
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute  left-0 top-full block h-[1px] w-full bg-goldprimary"
          ></motion.span>
        )}
      </motion.div>
    );
  });

  return (
      <>
          {isLoading && <Preloader />}
      <motion.div
        className={`navbarcontent  w-full  border-b-2 text-white `}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div className="container w-full  flex items-center justify-between h-24 ">
                  <div>
                      <Link  href='/' >
                          <PrismicNextImage field={headerData.logo} height={80} width={80} /> 
                          </Link>
          </div>
          <div className="flex gap-7 items-center  ">
          
            {displayNavigation}
            <Select onValueChange={changeLanguage} defaultValue={activeLocale}>
              <SelectTrigger className="w-[50px] md:w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {locales?.map((item) => {
                 return <SelectItem value={item} key={item}>
                    {item.toUpperCase()}
                  </SelectItem>;
                })}
              </SelectContent>
            </Select>
            <Menu
              size={50}
              className="cursor-pointer md:hidden"
              onClick={() => {
                handleAnimation();
              }}
            />
          </div>
        </div>
      </motion.div>

      <div></div>
      <motion.div
        className="absolute  w-full bg-gray h-full top-24"
        initial={{ y: -2000 }}
        animate={menuControls}
      >
        <ul className="container lg:pr-24 lg:pl-40  py-40 flex flex-col gap-5 text-white menu-items absolute z-30">
          <li className=" text-4xl lg:text-5xl font-semibold menu-item">
            Floor Plans
          </li>

          <li className="text-4xl lg:text-5xl menu-item">About Us</li>
          <li className="text-4xl lg:text-5xl menu-item">Contact Us</li>
        </ul>
        <div className="menu-background-pattern absolute top-0 "></div>
              <div className="menu-background-image absolute top-0 left-0 w-full h-[50vh] md:h-screen  "></div>
              <div className="absolute flex bottom-32 justify-center w-full gap-4">
                  <div>
                      {/*@ts-ignore*/}
                      {headerData?.facebook?.url && 
                      <PrismicNextLink field={headerData.facebook}><Facebook className="text-white" /></PrismicNextLink>}
                      
                  </div>
                  <div>
                                            {/*@ts-ignore*/}

                  {headerData?.instagram?.url && 
                      <PrismicNextLink field={headerData.instagram}><Instagram className="text-white" /></PrismicNextLink>}
                      
                  </div>
              </div>
      </motion.div>
    </>
  );
};

export default Nav;
