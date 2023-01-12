import { v4 as uuid } from 'uuid';

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  category_id: string;
}
// export interface Transaction {
//   id: number;
//   icon: string;
//   category: string;
//   amount: number;
// }
export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}
