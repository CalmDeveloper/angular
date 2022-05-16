import {ICompany} from "./ICompany";
import {IAddress} from "./IAdress";

export interface IUsersDetails {
    id: string,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: number,
    website: string,
    company: ICompany
}
