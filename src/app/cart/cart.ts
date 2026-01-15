import { Component, OnInit } from '@angular/core';

interface CartItem {
  prodId: number;
  prodName: string;
  price: number;
  qty: number;
  total: number;
  size?: string;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit{
cartItems: CartItem[] = [];
  grandTotal: number = 0;
  Amount: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.updateTotals();
    }
  }

  updateTotals() {
    this.grandTotal = this.cartItems.reduce((sum, item) => sum + item.total, 0);
    this.Amount = this.grandTotal; 
  }

  increaseQty(item: CartItem) {
    item.qty += 1;
    item.total = item.qty * item.price;
    this.updateCartStorage();
  }

  decreaseQty(item: CartItem) {
    if (item.qty > 1) {
      item.qty -= 1;
      item.total = item.qty * item.price;
      this.updateCartStorage();
    }
  }

 removeProduct(item: CartItem) {
  this.cartItems = this.cartItems.filter(
    i => !(i.prodId === item.prodId && i.size === item.size)
  );
  this.updateCartStorage();
}

  updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.updateTotals();
  }
}
