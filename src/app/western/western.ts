import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-western',
  standalone: false,
  templateUrl: './western.html',
  styleUrl: './western.css',
})
export class Western  implements OnInit{
products = [
    {id: 61,name: 'XYZ61',price: 1295,image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/dress/c/j/s/xl-htdrss7124-honky-tonky-original-imahjc45m2a7t7dd.jpeg?q=70&crop=false'},
    {id: 62,name: 'XYZ62',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/8/r/xxl-a1-zwerlon-original-imahg4hszwtsvjzz.jpeg?q=70'},
    {id: 63,name: 'XYZ63',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/q/4/xl-d-540-marron-xl-tendy-original-imaghdb3nkey8bmt.jpeg?q=70'},
    {id: 64,name: 'XYZ64',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/3/t/l-v-307-black-l-brisaenterprise-original-imahjgm4ndefjvxk.jpeg?q=70'},
    {id: 65,name: 'XYZ65',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/f/w/i/xxl-12243-sheetal-associates-original-imahfhjk8panrgpp.jpeg?q=70'},
    {id: 66,name: 'XYZ66',price: 1199,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/a/i/xxl-pl-105-white-aask-original-imagw4q6zkbzbnhh.jpeg?q=70'},
    {id: 67,name: 'XYZ67',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/h/q/s-pn81-pimu-resized-2-original-imah9n7ja3kyfpfz.jpeg?q=70'},
    {id: 68,name: 'XYZ68',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-gown/t/0/h/xl-sleeveless-stitched-1020-fabfinds-original-imahf7bjhxmet5db.jpeg?q=70'},
    {id: 69,name: 'XYZ69',price: 1399,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/p/b/j/s-kasshi-2013-usk-collection-original-imahghjzk9a9yep2.jpeg?q=70'},
    {id: 70,name: 'XYZ70',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/q/r/-original-imahff9hkv5bqwjv.jpeg?q=70'},
    {id: 71,name: 'XYZ71',price: 1495,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/2/a/o/l-12463-sheetal-associates-original-imahhm3cmsazx55u.jpeg?q=70'},
    {id: 72,name: 'XYZ72',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/6/l/s-aa-00217-sky-blue-aayu-original-imah7rqytztrgrez.jpeg?q=70'}
    
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
