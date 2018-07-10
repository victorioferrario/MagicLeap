import {ITechspecs} from "./ITechspecs";
export interface IProduct {
    id?: string;
    name: string;
    manufacturer: string;
    class: string;
    techspecs: ITechspecs;
    price?: string;
    image?:string;
    video?:string;
  }

  