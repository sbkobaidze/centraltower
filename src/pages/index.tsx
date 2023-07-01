import Image from 'next/image'
import Layout from '@/components/layout/Layout';

import { createClient } from "@/prismicio";
import { HomeDocument, NavbarDocument } from '../../prismicio-types';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
export default function Home({ header, page }: { header: NavbarDocument, page: HomeDocument }) {
  console.log(page.data)
  return (
    <Layout headerData={header.data}>
      <div className='container  '>
      <SliceZone  components={components} slices={page.data.slices} />
      </div>
   </Layout>
  
  )
}
export const getStaticProps = async ({ locale }: { locale: string }) => {
  const localeModified = locale === 'ka' ? 'ka-eu' : locale === 'en' ? 'en-us' : 'ru'
  const client = createClient();
  const header = await client.getSingle('navbar', { lang: localeModified })
  const page = await client.getByUID('home','homepage',{lang:localeModified})

  return {
    props: {
      header: header,
      page:page
    }
  };
};
