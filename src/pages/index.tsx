import Image from 'next/image'
import Layout from '@/components/layout/Layout';
import AnimationExample from '@/components/AnimatedText';
import { createClient } from "@/prismicio";
import { FlatsDocument, HomeDocument, NavbarDocument, PopupDocument } from '../../prismicio-types';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import Map from '@/components/Map';

export default function Home({ header, page, presentation, flats,blogs }: { header: NavbarDocument, page: HomeDocument, presentation: PopupDocument, flats: any,blogs:any }) {

  console.log(blogs,'test')
  
  return (
    <Layout headerData={header.data}>
      <div className='container  '>
        <SliceZone components={components} slices={page.data.slices} context={[presentation,flats.results,blogs.results]} />
        
        <Map />
      </div>
   </Layout>
  
  )
}
export const getStaticProps = async ({ locale }: { locale: string }) => {
  const localeModified = locale === 'ka' ? 'ka-eu' : locale === 'en' ? 'en-us' : 'ru'
  const client = createClient();
  const allFlats = await client.getByType('flats')
  const allBlogs = await client.getByType('blog',{lang:localeModified})

  const header = await client.getSingle('navbar', { lang: localeModified })
  const page = await client.getByUID('home', 'homepage', { lang: localeModified })
  const presentation = await client.getByUID('popup', 'presentation', { lang: localeModified })

  return {
    props: {
      header: header,
      page: page,
      presentation: presentation,
      flats: allFlats,
      blogs:allBlogs
    }
  };
};
