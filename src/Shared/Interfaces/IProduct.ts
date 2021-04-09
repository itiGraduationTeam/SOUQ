export interface IProduct {

    name: string;
    image: string[];
    brand: string;
    description: string,
    countInStock: number,
    price: number,
    category: string,
    subcategory: string,
    overview: string,
    rating: number, //default = 0
    numReviews: number, //default = 0
    discount: number, //default = 0
    size?: String,
    material?: String,
    color?: String,
    screenSize?: string,
    internalMemory?: string,
    battery?: string,
    operatingSystem?: string,
    memorySize?: string,
    proccessor?: string,
    tvScreenSize?: string,
    noOfUsbPort?: string,
    baseMaterial?: string,
    foundation?: string,
    skinType?: string,
    hairType?: string,
    formulation?: string,
  
  }
  