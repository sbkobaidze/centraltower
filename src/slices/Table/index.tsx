"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { DataTable } from "@/components/table/DataTable";
import { PrismicRichText } from "@prismicio/react";
import { formatCurrency } from "@/lib/currencyFormater";
import { asText } from "@prismicio/client";
import { PopupDocument } from "../../../prismicio-types";
import { FlatsDocument } from "../../../prismicio-types";

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<
  Content.TableSlice,
  [PopupDocument, FlatsDocument[]]
>;

/**
 * Component for "Table" Slices.
 */
const Table = ({ slice, context }: TableProps): JSX.Element => {


  const realTabledata = context[1].map((item) => {
    return {
      picture: item.data.floorplanimg,
      price: asText(item.data.price),
      space: asText(item.data.space),
      floor: asText(item.data.floor),
      rooms: asText(item.data.rooms),
      uid: item.uid,
    };
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-3 py-5"
      id='flats'
    >
      <h2 className="text-bold-home text-white">
        <PrismicRichText field={slice.primary.header} />{" "}
      </h2>
      <DataTable
        data={realTabledata}
        headers={{
          picture: "Floor Plan",
          price: asText(slice.primary.price),
          rooms: asText(slice.primary.rooms),
          floor: asText(slice.primary.floor),
          space: asText(slice.primary.space),
          next: asText(slice.primary.nextbutton),
          back: asText(slice.primary.backbutton),
          columnsFilter: asText(slice.primary.columnfilter),
        }}
      />
    </section>
  );
};

export default Table;
