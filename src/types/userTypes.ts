export enum gender {
  male,
  female,
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: gender;
  email: string;
  phone: string;
  username: string;
}
