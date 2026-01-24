import { Component,OnInit } from '@angular/core';

interface OrderItem {
  prodId: number;
  prodName: string;
  price: number;
  qty: number;
  total: number;
  size?: string;
  image?: string;
}
@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.css',
})

export class Order implements OnInit {
orders: OrderItem[] = [];


  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      this.orders = JSON.parse(storedOrders);
       }
  }
}
