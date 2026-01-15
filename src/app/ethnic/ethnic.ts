import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethnic',
  standalone: false,
  templateUrl: './ethnic.html',
  styleUrl: './ethnic.css',
})
export class Ethnic implements OnInit{


  products = [
    {id: 1,name: 'XYZ1',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/j/v/n/l-ethericset30-advik-creation-original-imahcy9qbqsfquf8.jpeg?q=70'},
    {id: 2,name: 'XYZ2',price: 1395,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/u/3/xs-ma-lamba-creations-original-imahebxnphszyxkz.jpeg?q=70'},
    {id: 3,name: 'XYZ3',price: 1399,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/2/2/xl-jasmin-oniyuri-original-imah6xh4jzggbqba.jpeg?q=70'},
    {id: 4,name: 'XYZ4',price: 1300,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/c/t/u/l-cs-4010-rangreela-original-imahjcg2myt9ztub.jpeg?q=70'},
    {id: 5,name: 'XYZ5',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/3/m/b/l-es-4011-rangreela-original-imahjdkvztyz74ag.jpeg?q=70'},
    {id: 6,name: 'XYZ6',price: 1199,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/4/d/o/s-36014277-moda-rapido-original-imahgt7p9t8pqcwn.jpeg?q=70'},
    {id: 7,name: 'XYZ7',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/j/c/3/m-mj-7248-manojava-original-imahg9d9z9kp3khg.jpeg?q=70'},
    {id: 8,name: 'XYZ8',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/n/f/4/xl-nsg-1441-saabhi-original-imahckwqu5arhkf7.jpeg?q=70'},
    {id: 9,name: 'XYZ9',price: 1399,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/a/3/s/m-36092351-moda-rapido-original-imahgt7wzehbqhre.jpeg?q=70'},
    {id: 10,name: 'XYZ10',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/x/b/r/m-black-emb-elepants-original-imahcefdvhegytgv.jpeg?q=70'},
    {id: 11,name: 'XYZ11',price: 1495,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/6/8/e/3xl-bigleaf-dhibha-original-imah3bgxhbe9feds.jpeg?q=70'},
    {id: 12,name: 'XYZ12',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/7/u/5/m-o-417-mokosh-original-imahhx5pvqzznk8h.jpeg?q=70'}
    
  ];

  wishlist: any[] = [];

  ngOnInit() {

    if (typeof window !== 'undefined') {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    }
  }

  toggleWishlist(product: any) {
    if (typeof window === 'undefined') return; 

    const index = this.wishlist.findIndex(item => item.id === product.id);

    if (index === -1) {
      this.wishlist.push(product);   
    } else {
      this.wishlist.splice(index, 1); 
    }

    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  isInWishlist(productId: number): boolean {
    if (typeof window === 'undefined') return false;
    return this.wishlist.some(item => item.id === productId);
  }
}


