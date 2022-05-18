
interface ICompany {

    name: string,
    catchPhrase: string,
    bs: string

}
interface IGeo {

    lat: string,
    lng: string
}
interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo:IGeo
}
export interface IUser {
    id: string,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: number,
    website: string,
    company: ICompany
}
