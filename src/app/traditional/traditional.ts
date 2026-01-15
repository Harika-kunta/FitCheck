import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-traditional',
  standalone: false,
  templateUrl: './traditional.html',
  styleUrl: './traditional.css',
})
export class Traditional  implements OnInit{
products = [
    {id: 49,name: 'XYZ49',price: 1295,image: 'https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-ETHGZAFQY3G7DK3J_1.jpg'},
    {id: 50,name: 'XYZ50',price: 1295,image: 'https://rukminim2.flixcart.com/image/1080/1080/xif0q/ethnic-set/e/9/8/xl-tf-rani101-tribalfit-original-imah7v6anwzx34bh.jpeg?q=70&crop=false'},
    {id: 51,name: 'XYZ51',price: 1295,image: 'https://rukminim2.flixcart.com/image/1080/1080/xif0q/ethnic-set/b/r/b/3xl-maroonkurtapantdupttaset001s-raseshwari-original-imah4bgfngthzwzs.jpeg?q=70&crop=false'},
    {id: 52,name: 'XYZ52',price: 1295,image: 'https://rukminim2.flixcart.com/image/1080/1080/xif0q/ethnic-set/y/e/o/m-chanderi-dishwa-fashion-original-imahfyrtykdwbh5b.jpeg?q=70&crop=false'},
    {id: 53,name: 'XYZ53',price: 1295,image: 'https://rukminim2.flixcart.com/image/1844/1844/xif0q/ethnic-set/n/o/q/m-kr-69-wine-kriska-original-imahgrqq5ga2kvxz.jpeg?q=70&crop=false'},
    {id: 54,name: 'XYZ54',price: 1199,image: 'https://rukminim2.flixcart.com/image/1080/1080/xif0q/salwar-kurta-dupatta/m/j/r/xxl-1663-fk-01-xxl-orriya-original-imahjh2teyjzgvyt.jpeg?q=70&crop=false'},
    {id: 55,name: 'XYZ55',price: 1295,image: 'https://rukminim2.flixcart.com/image/616/616/xif0q/salwar-kurta-dupatta/v/d/b/xl-kurta-paint-and-dupatta-set-ajantatextile-original-imahbdpgmdy7unsn.jpeg?q=70&crop=false'},
    {id: 56,name: 'XYZ56',price: 1299,image: 'https://rukminim2.flixcart.com/image/2000/2000/xif0q/salwar-kurta-dupatta/w/o/a/-original-imahegpv52saf8hs.jpeg?q=70&crop=false'},
    {id: 57,name: 'XYZ57',price: 1399,image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/e/a/g/-original-imahf77hwegfgvay.jpeg?q=70'},
    {id: 58,name: 'XYZ58',price: 1295,image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/h/k/w/l-423-d-mokosh-original-imahgzm2huhygmkm.jpeg?q=70'},
    {id: 59,name: 'XYZ59',price: 1495,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/x/g/xl-nari-vastra-kurta-pant-dupatta-set-cartyshop-original-imaheqpnsmyxfgfy.jpeg?q=70'},
    {id: 60,name: 'XYZ60',price: 1299,image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/t/j/s-wine0-subhla-art-original-imah6j8g4xmex9g8.jpeg?q=70'}
    
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
