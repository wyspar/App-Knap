import {Location} from "./Location";

export interface Application{
    firstName: string,
    lastName: string,
    email: string,
    id: number,
    location: Location,
    approved: boolean,
}