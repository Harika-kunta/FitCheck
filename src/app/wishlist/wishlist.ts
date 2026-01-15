import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {


  wishlist: any[] = [];

  ngOnInit() {
    this.loadWishlist();
  }

  loadWishlist() {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  }

  removeFromWishlist(id: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
}


