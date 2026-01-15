import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-sarees',
  standalone: false,
  templateUrl: './sarees.html',
  styleUrl: './sarees.css',
})
export class Sarees  implements OnInit{
products = [
    {id: 37,name: 'XYZ37',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/s/z/a/free-creap-black-srikastbhanjan-unstitched-resized-2-original-imahed9wubsfnf4g.jpeg?q=70'},
    {id: 38,name: 'XYZ38',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/e/v/w/free-saree-new-design-saree-new-design-2025-party-wear-saree-original-imahduneg9zzzqkh.jpeg?q=70'},
    {id: 39,name: 'XYZ39',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/t/1/free-paithani-god-voilet-cp-textile-unstitched-resized-2-original-imahbznpxe688wqh.jpeg?q=70'},
    {id: 40,name: 'XYZ40',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/j/k/z/free-rfs2292-reeta-fashion-unstitched-original-imagzddj8thkege7.jpeg?q=70'},
    {id: 41,name: 'XYZ41',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/u/x/x/free-4633s122r-satrani-unstitched-resized-2-original-imahgcfwnyzfwe2b.jpeg?q=70'},
    {id: 42,name: 'XYZ42',price: 1199,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/i/2/i/free-turky-flower-patta-wine33-jihana-fab-unstitched-resized-2-original-imah6k4fvk6atr9q.jpeg?q=70'},
    {id: 43,name: 'XYZ43',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/2/k/free-kcmksareeflip-kachhot-unstitched-resized-2-original-imahed2syh7vmppy.jpeg?q=70'},
    {id: 44,name: 'XYZ44',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/f/v/m/free-kara115-pink2-sariya-unstitched-original-imahgpjarzpttzbk.jpeg?q=70'},
    {id: 45,name: 'XYZ45',price: 1399,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/7/r/free-apsara-n-2067-laxmipati-sarees-unstitched-original-imah3zwg3qcqwtss.jpeg?q=70'},
    {id: 46,name: 'XYZ46',price: 1295,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/g/3/free-embroidered-bollywood-velvet-saree-dream-crushers-resized-2-original-imaghpwxs4jhjeff.jpeg?q=70'},
    {id: 47,name: 'XYZ47',price: 1495,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/i/w/c/free-mulflower-pink-villagius-unstitched-original-imah8xny3crmkzsg.jpeg?q=70'},
    {id: 48,name: 'XYZ48',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/d/m/free-hm-natasha-m-s-retail-unstitched-original-imahgfqgz3ztwytm.jpeg?q=70'}
    
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
