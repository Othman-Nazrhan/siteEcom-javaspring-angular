// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';


export class Product {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: Array<any>;
  small?: Array<string>;
  shortDetails?: string;
  description?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  state?: string;
  sale?: boolean;
  category?: string;
  tags?: ProductTags[];


  constructor(
    id?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
    pictures?: Array<any>,
    small?: Array<string>,
    shortDetails?: string,
    description?: string,
    stock?: number,
    newPro?: boolean,
    brand?: string,
    state?: string,
    sale?: boolean,
    category?: string,
    tags?: ProductTags[],
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
    this.discount = discount;
    this.pictures = pictures;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.state = state;
    this.sale = sale;
    this.category = category;
    this.tags = tags;
    this.small = small;
  }

 }
  // Color Filter

