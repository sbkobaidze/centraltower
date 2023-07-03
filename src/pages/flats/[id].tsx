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
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

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
          <div className="w-full h-full lg:flex-row flex gap-7 flex-col">
            <div className="lg:w-3/5 w-full h-full border-r-2 flex flex-col  ">
              {/* <h2 className="text-4xl font-bold text-white"> Floor Plan</h2> */}

              <img src="/floorplan.png" className="w-full h-full" />
            </div>

            <div className="lg:w-2/5 w-full h-full flex flex-col gap-5 text-white ">
                          <h2 className="text-5xl font-bold "> <PrismicRichText field={page.data.title} /></h2>
                          
                          <h3 className="font-semibold text-3xl border-b-2 border-goldprimary flex"><PrismicRichText field={page.data.price} /> | <PrismicRichText field={page.data.space} /> m</h3>
                          <div>
                              <h2 className="font-semibold text-3xl"></h2>
                          
                                <div className="flex flex-col gap-3">
                              <Button className="w-full bg-primary"> PDF</Button>
                              <Button className="w-full bg-primary">Book </Button>
                              </div>

  

                          </div>
                          <Tabs defaultValue="description"  >
  <TabsList className="w-full">
                  <TabsTrigger value="description">TEST </TabsTrigger>
                
                </TabsList>
                <TabsContent value="description">
                    <PrismicRichText field={page.data.description} />

                  </TabsContent>
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
