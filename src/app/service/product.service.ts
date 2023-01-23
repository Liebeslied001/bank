import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [
    {
      id: '1',
      name: 'laptop',
      description: 'Equipo tech',
      price: 1999,
    },
    {
      id: '2',
      name: 'celular',
      description: 'Celular de 6GB RAM y 128GB de memoria',
      price: 5000,
    },
    {
      id: '3',
      name: 'PC Gamer',
      description: 'PC con disco SSD de 1TB y tarjeta de video RTX 4070',
      price: 12000,
    },
  ];

  constructor() {}

  createProduct(product: HttpClient) {
    this.products.push(product);
  }

  getAllProducts() {
    // return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }

  getProductById(id: string) {
    return this.products.find((product) => product.id === id);
  }
}
