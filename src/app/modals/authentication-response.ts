export interface IAuthResponse {
  id: number;
  email: string;
  userName: string;
  address?: any;
  token: string;
  admin : boolean;
}
