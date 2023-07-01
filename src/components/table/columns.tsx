import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import Image from "next/image"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Floor = {
  picture: string
  rooms: number
  space: string
    floor: string
  price:string
}
 
export const columns: ColumnDef<Floor>[] = [
  {
    accessorKey: "picture",
        header: "Floor Plan",
        cell: ({ row }) => {
     

            return <Image src={row.original.picture} width={100} height={100} alt='floorplan' />
        }
  },
  {
    accessorKey: "Rooms",
    header: ({ column }) => {
        return (
          <Button
                variant="ghost"
                className="hover:bg-gray"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Rooms
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
     

        return row.original.rooms
    }
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
            Space
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
     

        return row.original.space
    }
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
                Floor
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
          cell: ({ row }) => {
         
    
            return row.original.floor
        }
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
                Price
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
          cell: ({ row }) => {
         
    
            return row.original.price
        }
      },  
]