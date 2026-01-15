import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 export interface IProduct {
  id: number;
  name: string;
  price: number;
  images: string[];
  selectedSize?: string;
  quantity: number;
}
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  
  product: IProduct = {
    id: 1,
    name: 'XYZ7',
    price: 1539,
    images: [
      'https://m.media-amazon.com/images/I/914FLZB811L._AC_UY1100_.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZEQNieln3dYQeygkHkXsLbtRuKpou7JCKgoPper3-g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_wfEZbwKjsnZTz45xfWDpsA9K0PTV-42anZahlklzA&s'
    ],
    quantity: 1
  };

  mainImage: string = this.product.images[0];
  
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectImage(img: string) {
    this.mainImage = img;
  }

  selectSize(size: string) {
    this.product.selectedSize = size;
  }

  increaseQty() {
    this.product.quantity += 1;
  }

  decreaseQty() {
    if (this.product.quantity > 1) this.product.quantity -= 1;
  }

  addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item.prodId === this.product.id && item.size === this.product.selectedSize);
    if (existing) {
      existing.qty += this.product.quantity;
      existing.total = existing.qty * this.product.price;
    } else {
      cart.push({
        prodId: this.product.id,
        prodName: this.product.name,
        price: this.product.price,
        qty: this.product.quantity,
        size: this.product.selectedSize,
        total: this.product.price * this.product.quantity
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    
  }

  relatedProducts = [
  { id: 2, name: 'XY21', price: 1299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwTMm6XteYNUY4JbKom3G6Q9HugHGadN3EQ&s' },
  { id: 3, name: 'XY22', price: 1299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnUHlDvrH8ZfMmjkNaLnEn1F08OC08w5USQ&s' },
  { id: 4, name: 'XY23', price: 1299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fv6_hJXCPjMEFQTxk8vzmOvxVkfrHfhG1A&s' },
  { id: 3, name: 'XY22', price: 1299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-VWdlEfDM_T4wGGPHjaa09HeZjMTylCkpg&s' },
  { id: 3, name: 'XY22', price: 1299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwxROC0dpsEO_iAnA6XXGBwwP5XTLMAeMxA&s' }
];

}

