import {IProduct} from './IProduct';
export interface IProductList {
    products: IProduct[];
}
  
export class ProductList implements IProductList{
    public products: IProduct[];
    constructor(data?:IProduct[]){           
          this.products = data !== undefined ? data: [];     
    }
}