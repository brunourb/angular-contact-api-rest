import { Company } from './company';
import { Address } from './address';

export interface Users {
  id:number;
  name:string;
  email:string;
  address : Address;
  phone:string;
  website:string;
  company:Company;
}
