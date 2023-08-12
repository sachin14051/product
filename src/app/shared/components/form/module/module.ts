export interface Iproduct{
    productName : string,
    productDescription : string,
    productCate : union
}

export type union = "product" | "catelog"