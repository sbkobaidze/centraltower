// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for blog documents */
interface BlogDocumentData {
  /**
   * title field in *blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * text field in *blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Slice Zone field in *blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *blog → Slice Zone*
 *
 */
type BlogDocumentDataSlicesSlice = never;
/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;
/** Content for Flats documents */
interface FlatsDocumentData {
  /**
   * title field in *Flats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * flatpdf field in *Flats*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.flatpdf
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  flatpdf: prismic.LinkToMediaField;
  /**
   * price field in *Flats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismic.RichTextField;
  /**
   * space field in *Flats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.space
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  space: prismic.RichTextField;
  /**
   * description field in *Flats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * floorplanimg field in *Flats*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.floorplanimg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  floorplanimg: prismic.ImageField<never>;
  /**
   * floor field in *Flats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.floor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  floor: prismic.RichTextField;
  /**
   * rooms field in *Flats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.rooms
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  rooms: prismic.RichTextField;
  /**
   * Slice Zone field in *Flats*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<FlatsDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Flats*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: flats.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Flats*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: flats.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Flats*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: flats.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Flats → Slice Zone*
 *
 */
type FlatsDocumentDataSlicesSlice = LivingRoomSlice;
/**
 * Flats document from Prismic
 *
 * - **API ID**: `flats`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FlatsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FlatsDocumentData>, "flats", Lang>;
/** Content for home documents */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = HeroSlice | TableSlice | BlogSliderSlice;
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for navbar documents */
interface NavbarDocumentData {
  /**
   * logo field in *navbar*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * contact field in *navbar*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.contact
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  contact: prismic.RichTextField;
  /**
   * projects field in *navbar*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.projects
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  projects: prismic.RichTextField;
  /**
   * about field in *navbar*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  about: prismic.RichTextField;
  /**
   * facebook field in *navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  facebook: prismic.LinkField;
  /**
   * instagram field in *navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  instagram: prismic.LinkField;
}
/**
 * navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >;
/** Content for popup documents */
interface PopupDocumentData {
  /**
   * header field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  header: prismic.RichTextField;
  /**
   * description field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * submitbutton field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.submitbutton
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  submitbutton: prismic.RichTextField;
  /**
   * cancelbutton field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.cancelbutton
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  cancelbutton: prismic.RichTextField;
  /**
   * inputplaceholder field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.inputplaceholder
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  inputplaceholder: prismic.RichTextField;
  /**
   * toastsucc field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.toastsucc
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  toastsucc: prismic.RichTextField;
  /**
   * toastdestructive field in *popup*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: popup.toastdestructive
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  toastdestructive: prismic.RichTextField;
}
/**
 * popup document from Prismic
 *
 * - **API ID**: `popup`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PopupDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PopupDocumentData>, "popup", Lang>;
export type AllDocumentTypes =
  | BlogDocument
  | FlatsDocument
  | HomeDocument
  | NavbarDocument
  | PopupDocument;
/**
 * Primary content in BlogSlider → Primary
 *
 */
interface BlogSliderSliceDefaultPrimary {
  /**
   * Title field in *BlogSlider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slider.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
}
/**
 * Item in BlogSlider → Items
 *
 */
export interface BlogSliderSliceDefaultItem {
  /**
   * title field in *BlogSlider → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slider.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * blogimage field in *BlogSlider → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slider.items[].blogimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  blogimage: prismic.ImageField<never>;
  /**
   * createdAt field in *BlogSlider → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slider.items[].createdat
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  createdat: prismic.DateField;
  /**
   * bloguid field in *BlogSlider → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slider.items[].bloguid
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  bloguid: prismic.RichTextField;
  /**
   * description field in *BlogSlider → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_slider.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Default variation for BlogSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogSliderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogSliderSliceDefaultPrimary>,
  Simplify<BlogSliderSliceDefaultItem>
>;
/**
 * Slice variation for *BlogSlider*
 *
 */
type BlogSliderSliceVariation = BlogSliderSliceDefault;
/**
 * BlogSlider Shared Slice
 *
 * - **API ID**: `blog_slider`
 * - **Description**: `BlogSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogSliderSlice = prismic.SharedSlice<
  "blog_slider",
  BlogSliderSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * header field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.header
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  header: prismic.RichTextField;
  /**
   * buttontext field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  buttontext: prismic.RichTextField;
  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * presentationbutton field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.presentationbutton
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  presentationbutton: prismic.RichTextField;
  /**
   * pdflink field in *Hero → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.pdflink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  pdflink: prismic.LinkToMediaField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in LivingRoom → Primary
 *
 */
interface LivingRoomSliceDefaultPrimary {
  /**
   * title field in *LivingRoom → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: living_room.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
}
/**
 * Item in LivingRoom → Items
 *
 */
export interface LivingRoomSliceDefaultItem {
  /**
   * image field in *LivingRoom → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: living_room.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for LivingRoom Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LivingRoomSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LivingRoomSliceDefaultPrimary>,
  Simplify<LivingRoomSliceDefaultItem>
>;
/**
 * Slice variation for *LivingRoom*
 *
 */
type LivingRoomSliceVariation = LivingRoomSliceDefault;
/**
 * LivingRoom Shared Slice
 *
 * - **API ID**: `living_room`
 * - **Description**: `LivingRoom`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LivingRoomSlice = prismic.SharedSlice<
  "living_room",
  LivingRoomSliceVariation
>;
/**
 * Primary content in Table → Primary
 *
 */
interface TableSliceDefaultPrimary {
  /**
   * header field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.header
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  header: prismic.RichTextField;
  /**
   * rooms field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.rooms
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  rooms: prismic.RichTextField;
  /**
   * floor field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.floor
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  floor: prismic.RichTextField;
  /**
   * space field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.space
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  space: prismic.RichTextField;
  /**
   * price field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.price
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  price: prismic.RichTextField;
  /**
   * columnfilter field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.columnfilter
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  columnfilter: prismic.RichTextField;
  /**
   * nextbutton field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.nextbutton
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  nextbutton: prismic.RichTextField;
  /**
   * backbutton field in *Table → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.primary.backbutton
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  backbutton: prismic.RichTextField;
}
/**
 * Default variation for Table Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TableSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TableSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Table*
 *
 */
type TableSliceVariation = TableSliceDefault;
/**
 * Table Shared Slice
 *
 * - **API ID**: `table`
 * - **Description**: `Table`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TableSlice = prismic.SharedSlice<"table", TableSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      BlogDocument,
      FlatsDocumentData,
      FlatsDocumentDataSlicesSlice,
      FlatsDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      NavbarDocumentData,
      NavbarDocument,
      PopupDocumentData,
      PopupDocument,
      AllDocumentTypes,
      BlogSliderSliceDefaultPrimary,
      BlogSliderSliceDefaultItem,
      BlogSliderSliceDefault,
      BlogSliderSliceVariation,
      BlogSliderSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      LivingRoomSliceDefaultPrimary,
      LivingRoomSliceDefaultItem,
      LivingRoomSliceDefault,
      LivingRoomSliceVariation,
      LivingRoomSlice,
      TableSliceDefaultPrimary,
      TableSliceDefault,
      TableSliceVariation,
      TableSlice,
    };
  }
}
