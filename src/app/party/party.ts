import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  standalone: false,
  templateUrl: './party.html',
  styleUrl: './party.css',
})
export class Party  implements OnInit{
products = [
    {id: 25,name: 'XYZ25',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/9/f/g/xs-1016-dream-tree-resized-2-original-imahfhngqyyy4gaj.jpeg?q=70'},
    {id: 26,name: 'XYZ26',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/d/z/l-solid-black-houseofcommon-original-imahjguxcvwzbmj9.jpeg?q=70'},
    {id: 27,name: 'XYZ27',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/z/v/-resized-2-original-imahey9d5bkhhh8n.jpeg?q=70'},
    {id: 28,name: 'XYZ28',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/m/o/l-d955a-dress-deklook-resized-2-original-imahe3gdzrhkzceg.jpeg?q=70'},
    {id: 29,name: 'XYZ29',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/u/i/w/xxl-dress-131-brown-sugathari-original-imahfcq2v8pxmbaa.jpeg?q=70'},
    {id: 30,name: 'XYZ30',price: 1199,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/q/0/3xl-cl-wm-u0627-addyvero-original-imahgqxwduwfgefd.jpeg?q=70'},
    {id: 31,name: 'XYZ31',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/j/a/xs-1628-sheetal-associates-original-imahhmvz6zqgmhuh.jpeg?q=70'},
    {id: 32,name: 'XYZ32',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/t/v/6/4xl-shirt-dress-zamaisha-resized-2-original-imag62w7vyqbqy2e-bb.jpeg?q=70'},
    {id: 33,name: 'XYZ33',price: 1399,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/8/t/6/l-wst-001-westchic-original-imahbywc8vbdmmxq.jpeg?q=70'},
    {id: 34,name: 'XYZ34',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/w/1/s-aa-pl-103-red-aask-original-imahfsezvmtcfue9.jpeg?q=70'},
    {id: 35,name: 'XYZ35',price: 1495,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/n/7/m-159-167-sumertex-original-imagbjectkz6yufs-bb.jpeg?q=70'},
    {id: 36,name: 'XYZ36',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/6/r/k/-resized-2-original-imaheqk8fuqfb6et.jpeg?q=70'}
    
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
