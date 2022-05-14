import {ICompany} from "./ICompany";

export interface IUser {
    id:string,
    name:string,
    username:string,
    email:string
    company: ICompany
}