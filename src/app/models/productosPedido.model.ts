export class ProductosPedidos {

    constructor(
        public nombre: string,
        public precio:number,
        public unidades:number,
        public _id?: string, 
        public categoria?: string,
        public img?:string,
        
    ) {}
  
}