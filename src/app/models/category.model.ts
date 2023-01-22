export interface CategoryModel {
  id: number;
  name: string;
  color: string;
  icon: string;
  transaction_type: string;
  transactions?: Transaction[];
}

// export interface Categories {
//   id: number;
//   name: string;
//   transaction_type: string;
//   color: string;
//   icon: string;
//   transactions: Transaction[];
// }

export interface Transaction {
  id: number;
  amount: number;
  date: Date;
  notes: null;
}
