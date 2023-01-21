export interface CategoryModel {
  name: string;
  color: string;
  icon: string;
  transaction_type: string;
}

export interface Categories {
  id: number;
  name: string;
  transaction_type: string;
  color: string;
  icon: string;
  transactions: Transaction[];
}

interface Transaction {
  id: number;
  amount: number;
  date: Date;
  notes: null;
}
