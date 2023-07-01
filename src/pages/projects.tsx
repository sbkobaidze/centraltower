import React from 'react'
import Layout from '@/components/layout/Layout'
import { createClient } from "@/prismicio";
import { NavbarDocument } from '../../prismicio-types';
const Projects = ({ header }:{header:NavbarDocument}) => {
  return (
      <div>
          <Layout headerData={header.data}>projects</Layout></div>
  )
}

export default Projects


export const getStaticProps = async () => {
    const client = createClient();
    const header = await client.getSingle('navbar')
  
    return {
      props: {
        header: header,
      }
    };
  };
  