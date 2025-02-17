

//define single product interface
export interface singleProductType {
    _id : string,
    title : string,
    slug : string | undefined,
    link : string | undefined,
    price : number,
    category : {slug : string, name : string, _id : string},
    images : string[],
    version : string
}