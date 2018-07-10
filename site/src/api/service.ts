import {  IProduct, IProductList } from '../models';
const baseURL = "http://demo7475333.mockable.io";
const fetchProductsAsync = (): Promise<IProductList[]> => {
    const spaceshipsURL = `${baseURL}/spaceships`;  
    return fetch(spaceshipsURL)
      .then((response) => (response.json()))
      .then(mapToProducts);
  };
  const mapToProducts = (list: any): IProductList[] => {
    return list.products.map(mapToProduct);
  };
  const mapToProduct = (product:IProduct): IProduct => {
      const item:IProduct = {
        class: product.class,        
        manufacturer: product.manufacturer,    
        name: product.name,    
        price:product.price,
        techspecs:product.techspecs        
      }
    return item;
  };  
  export const productAPI = {
    fetchProductsAsync
  };




