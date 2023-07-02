import React from "react";
import { createClient } from "@/prismicio";
import { GetStaticPaths } from "next";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { BlogDocument, NavbarDocument } from "../../../prismicio-types";
import Layout from "@/components/layout/Layout";
import path from "path";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/client";
import Head from "next/head";
import { PrismicNextImage } from "@prismicio/next";
import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Facebook,Twitter } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";

const Blog = ({
  page,
  header,
}: {
  page: BlogDocument;
  header: NavbarDocument;
}) => {
  const router = useRouter();
  const postShare = (media: string) => {
    const link = encodeURI(window.location.href);
    const msg = encodeURIComponent("Central Towers");
    const title = asText(page.data.title);
    if (media === "facebook") {
      window.open(
        `https://facebook.com/share.php?u=${link}`
      );
    } else if (media === 'twitter') {
      window.open(
        `https://twitter.com/share?&url=${link}&text=${title}&hashtags=${"CentralTower"}`
      );
    }

    console.log([link, msg, title]);
  };
  return (
    <div>
      <Head>
        <title>{page?.data?.meta_title!}</title>
        <meta
          name="description"
          content={page?.data?.meta_description!}
          key="desc"
        />
        <meta
          name="image"
          property="og:image"
          content={page?.data?.meta_image.url!}
        />
      </Head>
      <Layout headerData={header.data}>
        <div className="flex container py-12   flex-col ">
          <div className=" w-full flex justify-end pb-3">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <h2
                  className={`${buttonVariants({
                    className: "bg-greenprimary",
                  })}`}
                >
                  {" "}
                  <Share />
                </h2>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Share This Post</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    postShare("facebook");
                  }}
                >
                   <Facebook /> Facebook
                </DropdownMenuItem>
                <DropdownMenuItem     onClick={() => {
                    postShare("twitter");
                }} >
                  <Twitter /> Twitter</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex w-full gap-3 flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full  text-grayprimary">
              <h2 className="font-bold text-4xl pb-4 text-greenprimary">
                {" "}
                <PrismicRichText field={page.data.title} />
              </h2>
              <div className="w-full text-lg ">
              <PrismicRichText field={page.data.text} />

              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <PrismicNextImage field={page.data.image} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const localeModified =
    locale === "ka" ? "ka-eu" : locale === "en" ? "en-us" : "ru";
  console.log(localeModified);

  const client = createClient();
  //@ts-ignore
  const blogPage = await client.getByUID("blog", params?.uid!, {
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
  const blogPages = await client.getAllByType("blog");

  const paths = [];

  for (const locale of locales!) {
    const localizedPaths = blogPages.map((item) => {
      return {
        params: { uid: item.uid.toString() },
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
