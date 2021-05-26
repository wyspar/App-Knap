import {Address} from "./Address"

export interface Location
{
    id: number,
    name: string,
    cost: number,
    rent: boolean,
    address: Address,
}