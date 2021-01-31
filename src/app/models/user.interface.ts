export interface IUser {
  id: number;
  name: number;
  email: number;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  };
  phone: number;
  website: string;
}
