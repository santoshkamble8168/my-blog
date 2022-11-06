export interface ICategory {
    _id: string,
    name: string,
    slug: string
    //attributes: ICategoryAttribute 
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
    total: number
    currentPage: number,
    perPage: number,
    totalPages: number
}

export interface IUser {
    _id: string,
    role: string,
    name: string,
    email: string,
    avatar: string
}
export interface IPost {
    _id: string,
    type: string,
    title: string,
    content: string,
    description: string,
    slug: string,
    readTime: string,
    status: string,
    featuredImage: string,
    createdBy: IUser,
    createdAt: string,
    category: ICategory[],
}