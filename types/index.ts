export interface ICategory {
    id: string,
    attributes: ICategoryAttribute 
}

export interface ICategoryAttribute {
    title: string,
    slug: string
}

export default interface ICollectionResponse<T> {
    data: T;
    meta: IMeta
}

export interface IMeta {
    pagination: IPagination
}

export interface IPagination {
    page: number,
    count: number,
    total: number
}