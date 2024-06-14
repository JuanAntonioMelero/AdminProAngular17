import { Productos } from "./productos";

export class Pedido {

    constructor(
        public _id?: string, 
        public producto?:Productos,
        public cantidad?: number,
        public img?:string,
        public nombre?:string
    ) {}
  
}