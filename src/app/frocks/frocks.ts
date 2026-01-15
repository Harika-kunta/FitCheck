import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-frocks',
  standalone: false,
  templateUrl: './frocks.html',
  styleUrl: './frocks.css',
})
export class Frocks implements OnInit{
products = [
    {id: 13,name: 'XYZ13',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/v/d/m-one-piece-western-frock-nautiful-resized-2-original-imahcszrbufpacjh.jpeg?q=70'},
    {id: 14,name: 'XYZ14',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/o/w/a/m-ujala-blue-nautiful-original-imahcz286nfhngyj.jpeg?q=70'},
    {id: 15,name: 'XYZ15',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/1/i/n/xxl-panchhi-nautiful-resized-2-original-imahdbavxsyhzr7q.jpeg?q=70'},
    {id: 16,name: 'XYZ16',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/n/o/xl-crepe-western-frock-nautiful-original-imahdnukwsxghzpy.jpeg?q=70'},
    {id: 17,name: 'XYZ17',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/a/f/r/l-small-flower-nautiful-original-imahdnujkjepqhgt.jpeg?q=70'},
    {id: 18,name: 'XYZ18',price: 1199,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/2/p/g/s-western-frock-with-pocket-nautiful-original-imahggu9ds6bgypg.jpeg?q=70'},
    {id: 19,name: 'XYZ19',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/9/v/3xl-kurti-western-dresses-for-women-girls-dress-womens-stylish-resized-2-original-imagfa36p8meff8e.jpeg?q=70'},
    {id: 20,name: 'XYZ20',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/x/9/l-western-dress-for-women-georgette-long-maxi-dress-digital-resized-2-original-imah74yf4jcgw2vg.jpeg?q=70'},
    {id: 21,name: 'XYZ21',price: 1399,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/g/a/s/xl-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah4h5kw4gu7bhc.jpeg?q=70'},
    {id: 22,name: 'XYZ22',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/h/b/m-d735y-dres-deklook-original-imah39aq7jghj6nq.jpeg?q=70'},
    {id: 23,name: 'XYZ23',price: 1495,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/0/v/q/xl-small-flower-nautiful-original-imahdnukrpzzbcus.jpeg?q=70'},
    {id: 24,name: 'XYZ24',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/q/w/xxl-fit-and-flare-v-neck-frock-house-of-common-original-imahhzguww9qcggw.jpeg?q=70'}
    
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
