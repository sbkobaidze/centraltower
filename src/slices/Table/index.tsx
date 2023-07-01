import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { DataTable } from "@/components/table/DataTable";
import { PrismicRichText } from "@prismicio/react";
import { columns } from "@/components/table/columns";
import { formatCurrency } from "@/lib/currencyFormater";

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const Table = ({ slice }: TableProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-3 "

    >
      <h2 className="text-bold-home text-white"><PrismicRichText field={slice.primary.header} /> </h2>
      <DataTable columns={columns} data={[{
        picture: '/floorplan.png',
        rooms: 5,
        space: '50m2',
        floor: "2",
        price:formatCurrency(5000)
      
      },
      {
        picture: '/floorplan.png',
        rooms: 2,
        space: '100m2',
        floor: "3",
        price:formatCurrency(4000)
      
        },
        {
          picture: '/floorplan.png',
          rooms: 1,
          space: '90m2',
          floor: "5",
          price:formatCurrency(3000)
        
      }
]} />
      
    </section>
  );
};

export default Table;
