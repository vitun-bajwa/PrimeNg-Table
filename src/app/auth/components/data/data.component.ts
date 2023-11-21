import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  ngOnInit(): void {
    
  }
  products = [
    { id: 1, name: 'Product A', price: 25 },
    { id: 2, name: 'Product B', price: 10 },
    { id: 3, name: 'Product C', price: 35 },
    { id: 4, name: 'Product D', price: 15 },
  ];

  filteredProducts!: any[];
  minPrice: number = 0;
  maxPrice: number = 30;

  constructor() {
    this.filterAndSortProducts();
  }

  filterAndSortProducts() {
    this.filteredProducts = this.products
      .filter((product) => product.price >= this.minPrice && product.price <= this.maxPrice)
      .sort((a, b) => a.price - b.price);
  }
}

