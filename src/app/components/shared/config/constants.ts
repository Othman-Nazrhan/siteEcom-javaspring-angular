export namespace CONSTANTS {
    const DOMAIN: string = "http://localhost:8999";

    export class EndPoints {
      //PRODUCTS
      static readonly PRODUCTS_LIST: string = `${DOMAIN}/public/products/`;
      static readonly CATEGORIES_LIST: string = `${DOMAIN}/public/products/categories/`;

      //AUTH
      static readonly AUTHENTICATION: string = `${DOMAIN}/public/login/`;
      static readonly SIGN_UP: string = `${DOMAIN}/public/signup/`;
    }

    export class Messages {
      static readonly DEFAULT_ERROR: string =  "Une erreur interne s'est produite"
    }
}
