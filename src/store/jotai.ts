import { atom } from "jotai";

export const houseDataColumns = atom<{
    rooms: string,
    space: string,
    floor: string,
    price:string
}>({rooms:'',space:'',floor:'',price:''})