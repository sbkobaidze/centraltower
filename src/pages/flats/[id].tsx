import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { createClient } from "@/prismicio";
import { FlatsDocument, NavbarDocument } from "../../../prismicio-types";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/currencyFormater";

  import { components } from "@/slices";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SliceZone } from "@prismicio/react";

const Flats = ({
  page,
  header,
}: {
  page: FlatsDocument;
  header: NavbarDocument;
    }) => {
    
    
  return (
    <div>
      <Layout headerData={header.data}>
        <div className="container w-full h-full py-12">
          <div className="w-full h-full flex gap-7">
            <div className="w-3/5 h-full border-r-2 flex flex-col ">
              <h2 className="text-4xl font-bold text-white"> Floor Plan</h2>

              <img src="/floorplan.png" className="w-full h-full" />
            </div>

            <div className="w-2/5 h-full flex flex-col gap-3 text-white ">
                          <h2 className="text-5xl font-bold "> 42M2 Flat</h2>
                          
                          <h3 className="font-semibold text-3xl border-b-2 border-goldprimary">{formatCurrency(375645)} | 191 m</h3>
                          <div>
                              <h2 className="font-semibold text-3xl">Details</h2>
                          <ul className="text-2xl">
                              <li>
                                  2 Bedrooms
                              </li>
                              <li>3 Toilets</li>
                              <li>3 Toilets</li>
                              <li>3 Toilets</li>
                              <li>3 Toilets</li>
                              <li>3 Toilets</li>
                              <li>3 Toilets</li>
                              <li>3 Toilets</li>
                              
                              <li>3 Toilets</li>
                              </ul>
                                <div className="flex flex-col gap-3">
                              <Button className="w-full bg-primary"> PDF</Button>
                              <Button className="w-full bg-primary"> Book Visit</Button>
                              </div>

  

                          </div>
                          <Tabs defaultValue="description"  >
  <TabsList className="w-full">
    <TabsTrigger value="description">Description</TabsTrigger>
  </TabsList>
  <TabsContent value="description">Change your password here.</TabsContent>
</Tabs>
                         
            </div>
                  </div>
                  <SliceZone  slices={page.data.slices} components={components}/>
            
        </div>
      </Layout>
    </div>
  );
};

export default Flats;

// export const getStaticPaths = async () => {

// }

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const localeModified =
    locale === "ka" ? "ka-eu" : locale === "en" ? "en-us" : "ru";

  const client = createClient();
  //@ts-ignore
  const blogPage = await client.getByUID("flats", params?.id!, {
    lang: localeModified,
  });
  const header = await client.getSingle("navbar", { lang: localeModified });

  return {
    props: {
      page: blogPage,
      header: header,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const client = createClient();
  const blogPages = await client.getAllByType("flats");

  const paths = [];

  for (const locale of locales!) {
    const localizedPaths = blogPages.map((item) => {
      return {
        params: { id: item.uid.toString() },
        locale: locale.split("-")[0],
      };
    });
    paths.push(...localizedPaths);
  }

  return {
    paths,
    fallback: false,
  };
};
