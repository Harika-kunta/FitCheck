import 'zone.js';

import { AfterViewInit, Component, ViewChild, ElementRef, OnDestroy,
  Inject,
  PLATFORM_ID, OnInit
 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements AfterViewInit, OnDestroy, OnInit{
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLUListElement>;

  // scrollLeft() {
  //   this.carousel.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  // }

  // scrollRight() {
  //   this.carousel.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  // }
private autoScrollInterval: any;
  private scrollAmount =500;
  private autoScrollTime = 3000;
private isBrowser: boolean;
constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      this.startAutoScroll();
    }
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollRight() {
  const el = this.carousel.nativeElement

if (!this.carousel) return;
  if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
    el.scrollLeft = 0;
  } else {
   el.scrollLeft += this.scrollAmount;
  }
}

  startAutoScroll() {
    this.stopAutoScroll();
    this.autoScrollInterval = setInterval(() => {
      this.scrollRight();
    }, 3000);
  }

  pauseAutoScroll() {
    this.stopAutoScroll();
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
       this.autoScrollInterval = null;
    }
  }
    ngOnDestroy() {
    this.stopAutoScroll(); 
  }

  products = [
    {id: 3, name: 'XYZ3',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/2/2/xl-jasmin-oniyuri-original-imah6xh4jzggbqba.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/q/u/s-jasmin-fashtown-original-imahg4fhyfyxk8ra.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/e/c/xl-jasmin-oniyuri-original-imah6xh4jghjsxdv.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/w/n/xl-jasmin-oniyuri-original-imah6xh4ge7khqrd.jpeg?q=70'], quantity: 1},
    {id: 8, name: 'XYZ8',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/n/f/4/xl-nsg-1441-saabhi-original-imahckwqu5arhkf7.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/f/x/xl-nsg-1441-saabhi-original-imahckwq2he4zzqx.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/x/p/xl-nsg-1441-saabhi-original-imahckwq7euvhchh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/z/m/xl-nsg-1441-saabhi-original-imahckwqjwrarg2n.jpeg?q=70'], quantity: 1},
    {id: 20, name: 'XYZ20',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/x/9/l-western-dress-for-women-georgette-long-maxi-dress-digital-resized-2-original-imah74yf4jcgw2vg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/h/s/1/l-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah74yfzndzw2kg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/u/1/l-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah74yfnhegrhbn.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/d/b/l-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah74yfzyzmgm7r.jpeg?q=70'], quantity: 1},
    {id: 23, name: 'XYZ23',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/q/w/xxl-fit-and-flare-v-neck-frock-house-of-common-original-imahhzguww9qcggw.jpeg?q=70'], quantity: 1},
    {id: 30, name: 'XYZ30',price: 1199,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/q/0/3xl-cl-wm-u0627-addyvero-original-imahgqxwduwfgefd.jpeg?q=70','','',''], quantity: 1},
    {id: 38, name: 'XYZ38',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/e/v/w/free-saree-new-design-saree-new-design-2025-party-wear-saree-original-imahduneg9zzzqkh.jpeg?q=70','','',''], quantity: 1},
    {id: 43, name: 'XYZ43',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/2/k/free-kcmksareeflip-kachhot-unstitched-resized-2-original-imahed2syh7vmppy.jpeg?q=70','','',''], quantity: 1},
    {id: 48, name: 'XYZ48',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/d/m/free-hm-natasha-m-s-retail-unstitched-original-imahgfqgz3ztwytm.jpeg?q=70','','',''], quantity: 1},
    {id: 57, name: 'XYZ57',price: 1399,images:['https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/e/a/g/-original-imahf77hwegfgvay.jpeg?q=70','','',''], quantity: 1},
    {id: 65, name: 'XYZ65',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/f/w/i/xxl-12243-sheetal-associates-original-imahfhjk8panrgpp.jpeg?q=70','','',''], quantity: 1},
    {id: 69, name: 'XYZ69',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/p/b/j/s-kasshi-2013-usk-collection-original-imahghjzk9a9yep2.jpeg?q=70','','',''], quantity: 1},
    {id: 72, name: 'XYZ72',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/6/l/s-aa-00217-sky-blue-aayu-original-imah7rqytztrgrez.jpeg?q=70','','',''], quantity: 1}
    
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

  
popupProduct: any = null;

openPopup(product: any) {
  this.popupProduct = product;
}

closePopup() {
  this.popupProduct = null;
}

}
