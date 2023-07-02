"use client"
import { useState } from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
    useReactTable,
    SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  VisibilityState,
  




} from "@tanstack/react-table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { formatCurrency } from "@/lib/currencyFormater";
import { ImageFieldImage } from "@prismicio/client";
import { PrismicRichText,  } from "@prismicio/react/dist/react-server/PrismicRichText"


interface DataTableProps<TData, TValue> {
  data: TData[],
  headers: {
    picture: string;
    rooms: string;
    space: string;
    floor: string;
    price: string;
    next: string,
    back: string,
    columnsFilter:string
    
  }
}

export type Floor = {
  picture: ImageFieldImage;
  rooms: string;
  space: string;
  floor: string;
  price: string;
};

export function DataTable<TData, TValue>({
  data,
  headers
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const headersForColumns = {
    picture: headers.picture,
    rooms: headers.rooms,
    floor: headers.floor,
    price: headers.price,
    space:headers.space
    
  }

  
 const columns: ColumnDef<Floor>[] = [
  {
    accessorKey: "picture",
    header:headers.picture,
      

    cell: ({ row }) => {
      return (
        <PrismicNextImage
          field={row?.original?.picture!}
          width={100}
          height={100}
        />
      );
    },
  },
  {
    accessorKey: "rooms",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-gray"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
        {headers.rooms}          
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.rooms;
    },
  },
  {
    accessorKey: "space",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-gray"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {headers.space}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.space;
    },
  },

  {
    accessorKey: "floor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-gray"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {headers.floor}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.floor;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-gray"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
{headers.price}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return formatCurrency(parseInt(row.original.price));
    },
  },
];


  const table = useReactTable({
    data,
    //@ts-ignore
    columns,
      getCoreRowModel: getCoreRowModel(),
      onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,




      state: {
        sorting,
        columnVisibility,

      }

  })

  return (
    
    <div className="rounded-md border border-goldprimary text-white">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-pink mt-3 mx-3">
            {headers.columnsFilter}

            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value:any) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {/*@ts-ignore */}
                    {headersForColumns[column.id]}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      <Table className="">
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 px-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-pink"

        >
          {headers.back}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-pink"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {headers.next}
        </Button>
      </div>
      </div>
  )
}
