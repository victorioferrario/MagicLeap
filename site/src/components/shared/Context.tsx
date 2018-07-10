import * as React from "react";

import { ProductList } from "../../models/";
import {productAPI} from "../../api/service";

import imageBWing from '../../media/B-Wing.png';
import imageRZ1 from '../../media/RZ-1.png';

import imageT4A from '../../media/T-4A.png';
import imageT65 from '../../media/T-65.png';

import imageTwinIon from '../../media/Twin-Ion.png';
import imageXG1 from '../../media/XG-1.png';

import imageYT from '../../media/YT-1300.png';
import imageYWing from '../../media/Y-Wing.png';

export const DataContext = React.createContext(new ProductList());

export class DataProvider extends React.Component {
 public state = {
      list:new ProductList()
 }
 constructor(props:any){
    super(props);
 }
 public componentDidMount() {    
    productAPI.fetchProductsAsync().then((results:any)=>{
        const data = new ProductList(results);
        const images = this.initData();
        const videos = this.initVideoData();
        for(let i =0 ; i < data.products.length; i ++){
            data.products[i].id = "product_" + i.toString();
            data.products[i].image = images[i].toString();
            data.products[i].video = videos[i];
        }
        this.setState({list:data});    
    });  
  }
 public render() {
    return (
      <DataContext.Provider value={this.state.list}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
  private initData(){
    const imageList = [ 
         imageTwinIon, imageT65, 
         imageYWing, imageYT, 
         imageXG1, imageT4A,
         imageRZ1, imageBWing
    ];
    return imageList;   
  }
  private initVideoData(){
    const videoList = [ 
         "APED4rd8B7o",
         "hI3kWYjLwwE",

         "VP-jKr2vKx4",
         "94VSGBSUaCc",

         "PDYv0ga1uaU",
         "BV0152Sexqc",

         "ZU1czGj2i8o",
         "2ZjNdwugDb4"
    ];
    return videoList;   
  }
}