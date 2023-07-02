"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { DataTable } from "@/components/table/DataTable";
import { PrismicRichText } from "@prismicio/react";
import { formatCurrency } from "@/lib/currencyFormater";
import { asText } from "@prismicio/client";

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const Table = ({ slice,context }: TableProps): JSX.Element => {


  const tableData = slice.items.map(item => {
    return {picture:item.floorplanimage, rooms:asText(item.rooms),space:asText(item.space),floor:asText(item.floor),price:asText(item.price)}
  })


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-3 py-5"

    >
      <h2 className="text-bold-home text-white"><PrismicRichText field={slice.primary.header} /> </h2>
      <DataTable data={tableData} headers={{ picture: "Floor Plan", price: asText(slice.primary.price), rooms: asText(slice.primary.rooms), floor: asText(slice.primary.floor), space: asText(slice.primary.space), next:asText( slice.primary.nextbutton), back:asText( slice.primary.backbutton), columnsFilter:asText(slice.primary.columnfilter)}} />
      
    </section>
  );
};

export default Table;
