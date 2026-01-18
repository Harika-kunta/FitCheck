import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 export interface IProduct {
  id: number;
  name: string;
  price: number;
  images: string[];
  selectedSize?: string;
  quantity?: number;
}
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  
  product!: IProduct ;
  mainImage!: string;

  allProducts: IProduct[] = [
    {id: 1, name: 'XYZ1',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/j/v/n/l-ethericset30-advik-creation-original-imahcy9qbqsfquf8.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/n/1/q/l-ethericset29-advik-creation-original-imahcy9qarmns8sf.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/m/6/n/l-ethericset29-advik-creation-original-imahcy9qe2unsjgr.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/t/3/4/l-ethericset30-advik-creation-original-imahcy9qpf7rr9vj.jpeg?q=70'], quantity: 1},
    {id: 2, name: 'XYZ2',price: 1395,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/u/3/xs-ma-lamba-creations-original-imahebxnphszyxkz.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/m/n/xs-ma-lamba-creations-original-imahebxngh8y3npf.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/6/e/e/xs-ma-lamba-creations-original-imahebxnx3xkawdk.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/k/h/s-ma-lamba-creations-original-imahebxndzmetdgy.jpeg?q=70'], quantity: 1},
    {id: 3, name: 'XYZ3',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/2/2/xl-jasmin-oniyuri-original-imah6xh4jzggbqba.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/q/u/s-jasmin-fashtown-original-imahg4fhyfyxk8ra.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/e/c/xl-jasmin-oniyuri-original-imah6xh4jghjsxdv.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/w/n/xl-jasmin-oniyuri-original-imah6xh4ge7khqrd.jpeg?q=70'], quantity: 1},
    {id: 4, name: 'XYZ4',price: 1300,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/c/t/u/l-cs-4010-rangreela-original-imahjcg2myt9ztub.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/6/v/p/xxl-cs-4010-rangreela-original-imahjcg2adjffxud.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/c/t/u/l-cs-4010-rangreela-original-imahjcg2myt9ztub.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/y/z/z/m-cs-4010-rangreela-original-imahjcg2tudvrg7r.jpeg?q=70'], quantity: 1},
    {id: 5, name: 'XYZ5',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/3/m/b/l-es-4011-rangreela-original-imahjdkvztyz74ag.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/z/g/h/l-es-4011-rangreela-original-imahjdkv5pv6fqdk.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/8/j/0/xl-es-4011-rangreela-original-imahjdkvsjdmpgfr.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/x/x/e/m-es-4011-rangreela-original-imahjdkvqaghz8au.jpeg?q=70'], quantity: 1},
    {id: 6, name: 'XYZ6',price: 1199,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/4/d/o/s-36014277-moda-rapido-original-imahgt7p9t8pqcwn.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/e/4/s-36014277-moda-rapido-original-imahgt7pcxthwshf.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/c/e/e/s-36014277-moda-rapido-original-imahgt7pft8kjfad.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/1/n/z/s-36014277-moda-rapido-original-imahgt7padpgjtxh.jpeg?q=70'], quantity: 1},
    {id: 7, name: 'XYZ7',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/j/c/3/m-mj-7248-manojava-original-imahg9d9z9kp3khg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/h/k/b/l-mj-7248-manojava-original-imahg9d9ugeqzh9g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/d/v/xl-mj-7248-manojava-original-imahg9d95h3fznqh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/m/x/i/xxl-mj-7248-manojava-original-imahg9d9wu36mpcf.jpeg?q=70'], quantity: 1},
    {id: 8, name: 'XYZ8',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/n/f/4/xl-nsg-1441-saabhi-original-imahckwqu5arhkf7.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/f/x/xl-nsg-1441-saabhi-original-imahckwq2he4zzqx.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/x/p/xl-nsg-1441-saabhi-original-imahckwq7euvhchh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/z/m/xl-nsg-1441-saabhi-original-imahckwqjwrarg2n.jpeg?q=70'], quantity: 1},
    {id: 9, name: 'XYZ9',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/a/3/s/m-36092351-moda-rapido-original-imahgt7wzehbqhre.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/t/v/m-36092351-moda-rapido-original-imahgt7wwqcdqxzn.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/r/u/e/m-36092351-moda-rapido-original-imahgt7wzfcvdtfg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/x/w/y/m-36092351-moda-rapido-original-imahgt7wnd5r9a64.jpeg?q=70'], quantity: 1},
    {id: 10, name: 'XYZ10',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/x/b/r/m-black-emb-elepants-original-imahcefdvhegytgv.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/u/f/q/m-black-emb-elepants-original-imahcefd8chxrrhn.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/m/b/z/m-black-emb-elepants-original-imahcefdpnb6zcfu.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/2/a/k/m-black-emb-elepants-original-imahcefdcgeqrhm6.jpeg?q=70'], quantity: 1},
    {id: 11, name: 'XYZ11',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/6/8/e/3xl-bigleaf-dhibha-original-imah3bgxhbe9feds.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/t/t/3xl-bigleaf-dhibha-original-imah3bgxepnkbjwa.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/s/w/3xl-bigleaf-dhibha-original-imah3bgxdtyuzpqr.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/s/w/3xl-bigleaf-dhibha-original-imah3bgxdtyuzpqr.jpeg?q=70'], quantity: 1},
    {id: 12, name: 'XYZ12',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/7/u/5/m-o-417-mokosh-original-imahhx5pvqzznk8h.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/8/d/xxl-o-417-mokosh-original-imahhx5p4deydeyw.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/k/t/s/m-o-417-mokosh-original-imahhx5pz4h6chqh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/r/x/m-o-417-mokosh-original-imahhx5pxfnvkfak.jpeg?q=70'], quantity: 1},
    {id: 13, name: 'XYZ13',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/v/d/m-one-piece-western-frock-nautiful-resized-2-original-imahcszrbufpacjh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/3/5/y/l-new-ujala-nautiful-original-imahdnukbdknnu7f.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/1/5/s/xl-new-ujala-nautiful-original-imahdnukzyypsf9q.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/q/d/l/xl-new-ujala-nautiful-original-imahdnukrqkrrhhx.jpeg?q=70'], quantity: 1},
    {id: 14, name: 'XYZ14',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/o/w/a/m-ujala-blue-nautiful-original-imahcz286nfhngyj.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/r/e/r/m-ujala-blue-nautiful-original-imahdnukcqzhddyx.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/8/s/i/xl-blue-lotus-nautiful-original-imahdnukhyv2nwdw.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/y/j/xl-ujala-blue-nautiful-original-imahdnukrzjmtmfr.jpeg?q=70'], quantity: 1},
    {id: 15, name: 'XYZ15',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/1/i/n/xxl-panchhi-nautiful-resized-2-original-imahdbavxsyhzr7q.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/o/j/y/s-panchhi-nautiful-original-imahdbavgvsrryhp.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/n/r/v/xxl-panchhi-nautiful-original-imahdbavpxuwpnsy.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/d/g/x/xxl-panchhi-nautiful-original-imahdbavuhjdkcnz.jpeg?q=70'], quantity: 1},
    {id: 16, name: 'XYZ16',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/n/o/xl-crepe-western-frock-nautiful-original-imahdnukwsxghzpy.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/c/6/3xl-crepe-western-frock-nautiful-original-imahbbavfajgwzph.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/r/x/y/3xl-crepe-western-frock-nautiful-original-imahbbav7kgfpvtp.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/q/v/m/3xl-crepe-western-frock-nautiful-original-imahbbavcnxhggch.jpeg?q=70'], quantity: 1},
    {id: 17, name: 'XYZ17',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/a/f/r/l-small-flower-nautiful-original-imahdnujkjepqhgt.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/w/l/l/l-small-flower-nautiful-original-imahdnujhcrpm56f.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/u/s/v/l-small-flower-nautiful-original-imahdnujksrkq76e.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/r/v/xxl-small-flower-nautiful-original-imahdnujcuhse86h.jpeg?q=70'], quantity: 1},
    {id: 18, name: 'XYZ18',price: 1199,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/2/p/g/s-western-frock-with-pocket-nautiful-original-imahggu9ds6bgypg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/o/n/x/s-western-frock-with-pocket-nautiful-original-imahggu9far5yvyv.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/b/v/b/s-western-frock-with-pocket-nautiful-original-imahggu9zaz5sr7r.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/c/l/q/s-western-frock-with-pocket-nautiful-original-imahggu9jhf6yyrf.jpeg?q=70'], quantity: 1},
    {id: 19, name: 'XYZ19',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/9/v/3xl-kurti-western-dresses-for-women-girls-dress-womens-stylish-resized-2-original-imagfa36p8meff8e.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-dress/y/4/0/xxl-7500-2-black-shopsy-shreeva-enterprise-original-imagfa36wvh5zvas.jpeg?q=70'], quantity: 1},
    {id: 20, name: 'XYZ20',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/x/9/l-western-dress-for-women-georgette-long-maxi-dress-digital-resized-2-original-imah74yf4jcgw2vg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/h/s/1/l-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah74yfzndzw2kg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/u/1/l-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah74yfnhegrhbn.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/d/b/l-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah74yfzyzmgm7r.jpeg?q=70'], quantity: 1},
    {id: 21, name: 'XYZ21',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/g/a/s/xl-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah4h5kw4gu7bhc.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/p/n/xl-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah4h5kbyzywjna.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/8/2/v/xl-western-dress-for-women-georgette-long-maxi-dress-digital-original-imah4h5kbbs4zfht.jpeg?q=70'], quantity: 1},
    {id: 22, name: 'XYZ22',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/h/b/m-d735y-dres-deklook-original-imah39aq7jghj6nq.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/x/4/m-d735y-dres-deklook-original-imah39aqc5xr9dgg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/h/3/m-d735y-dres-deklook-original-imah39aqfphjnb2p.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/p/4/m-d735y-dres-deklook-original-imah39aqtgyykpxp.jpeg?q=70'], quantity: 1},
    {id: 23, name: 'XYZ23',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/7/q/w/xxl-fit-and-flare-v-neck-frock-house-of-common-original-imahhzguww9qcggw.jpeg?q=70'], quantity: 1},
    {id: 24, name: 'XYZ24',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/0/v/q/xl-small-flower-nautiful-original-imahdnukrpzzbcus.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/o/a/xl-small-flower-nautiful-original-imahdnukruady2yj.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/c/e/2/xl-small-flower-nautiful-original-imahdnuk9jghesg2.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/b/5/xl-small-flower-nautiful-original-imahdnukh99zxzes.jpeg?q=70'], quantity: 1},
    {id: 25, name: 'XYZ25',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/9/f/g/xs-1016-dream-tree-resized-2-original-imahfhngqyyy4gaj.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/1/m/xs-1016-dream-tree-original-imahfhngsbpxhfcd.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/x/a/w/-original-imaheybysut3zmr3.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/6/l/xs-1016-dream-tree-original-imahfhngh75hcgyp.jpeg?q=70'], quantity: 1},
    {id: 26, name: 'XYZ26',price: 1295,images:['','','',''], quantity: 1},
    {id: 27, name: 'XYZ27',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/z/v/-resized-2-original-imahey9d5bkhhh8n.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/4/8/r/xl-aa-0184-gold-satin-cow-l-neack-dress-aayu-original-imahbeg998vwzfnp.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/m/d/xl-aa-0184-gold-satin-cow-l-neack-dress-aayu-original-imahbeg9dzbzwybt.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/q/g/a/xl-aa-0184-gold-satin-cow-l-neack-dress-aayu-original-imahbeg9bmrn4y2g.jpeg?q=70'], quantity: 1},
    {id: 28, name: 'XYZ28',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/m/o/l-d955a-dress-deklook-resized-2-original-imahe3gdzrhkzceg.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/k/u/l-d955a-dress-deklook-original-imahe3gdvxukqkf7.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/h/z/l-d955a-dress-deklook-original-imahe3gd5eutacvu.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/l/j/l-d955a-dress-deklook-original-imahe3gdwkcwd6h4.jpeg?q=70'], quantity: 1},
    {id: 29, name: 'XYZ29',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/u/i/w/xxl-dress-131-brown-sugathari-original-imahfcq2v8pxmbaa.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/f/x/m-dress-131-brown-sugathari-original-imahfcq2gyxhhwgh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/l/h/xxl-dress-131-brown-sugathari-original-imahfcq2etwaz9bh.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/dress/2/h/f/xxl-dress-131-brown-sugathari-original-imahfcq2rr5sbu2h.jpeg?q=70'], quantity: 1},
    {id: 30, name: 'XYZ30',price: 1199,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/m/q/0/3xl-cl-wm-u0627-addyvero-original-imahgqxwduwfgefd.jpeg?q=70','','',''], quantity: 1},
    {id: 31, name: 'XYZ31',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/j/a/xs-1628-sheetal-associates-original-imahhmvz6zqgmhuh.jpeg?q=70','','',''], quantity: 1},
    {id: 32, name: 'XYZ32',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/t/v/6/4xl-shirt-dress-zamaisha-resized-2-original-imag62w7vyqbqy2e-bb.jpeg?q=70','','',''], quantity: 1},
    {id: 33, name: 'XYZ33',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/8/t/6/l-wst-001-westchic-original-imahbywc8vbdmmxq.jpeg?q=70','','',''], quantity: 1},
    {id: 34, name: 'XYZ34',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/w/1/s-aa-pl-103-red-aask-original-imahfsezvmtcfue9.jpeg?q=70','','',''], quantity: 1},
    {id: 35, name: 'XYZ35',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/i/n/7/m-159-167-sumertex-original-imagbjectkz6yufs-bb.jpeg?q=70','','',''], quantity: 1},
    {id: 36, name: 'XYZ36',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/6/r/k/-resized-2-original-imaheqk8fuqfb6et.jpeg?q=70','','',''], quantity: 1},
    {id: 37, name: 'XYZ37',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/s/z/a/free-creap-black-srikastbhanjan-unstitched-resized-2-original-imahed9wubsfnf4g.jpeg?q=70','','',''], quantity: 1},
    {id: 38, name: 'XYZ38',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/e/v/w/free-saree-new-design-saree-new-design-2025-party-wear-saree-original-imahduneg9zzzqkh.jpeg?q=70','','',''], quantity: 1},
    {id: 39, name: 'XYZ39',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/t/1/free-paithani-god-voilet-cp-textile-unstitched-resized-2-original-imahbznpxe688wqh.jpeg?q=70','','',''], quantity: 1},
    {id: 40, name: 'XYZ40',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/j/k/z/free-rfs2292-reeta-fashion-unstitched-original-imagzddj8thkege7.jpeg?q=70','','',''], quantity: 1},
    {id: 41, name: 'XYZ41',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/u/x/x/free-4633s122r-satrani-unstitched-resized-2-original-imahgcfwnyzfwe2b.jpeg?q=70','','',''], quantity: 1},
    {id: 42, name: 'XYZ42',price: 1199,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/i/2/i/free-turky-flower-patta-wine33-jihana-fab-unstitched-resized-2-original-imah6k4fvk6atr9q.jpeg?q=70','','',''], quantity: 1},
    {id: 43, name: 'XYZ43',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/2/k/free-kcmksareeflip-kachhot-unstitched-resized-2-original-imahed2syh7vmppy.jpeg?q=70','','',''], quantity: 1},
    {id: 44, name: 'XYZ44',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/f/v/m/free-kara115-pink2-sariya-unstitched-original-imahgpjarzpttzbk.jpeg?q=70','','',''], quantity: 1},
    {id: 45, name: 'XYZ45',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/7/r/free-apsara-n-2067-laxmipati-sarees-unstitched-original-imah3zwg3qcqwtss.jpeg?q=70','','',''], quantity: 1},
    {id: 46, name: 'XYZ46',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/g/3/free-embroidered-bollywood-velvet-saree-dream-crushers-resized-2-original-imaghpwxs4jhjeff.jpeg?q=70','','',''], quantity: 1},
    {id: 47, name: 'XYZ47',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/i/w/c/free-mulflower-pink-villagius-unstitched-original-imah8xny3crmkzsg.jpeg?q=70','','',''], quantity: 1},
    {id: 48, name: 'XYZ48',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/d/m/free-hm-natasha-m-s-retail-unstitched-original-imahgfqgz3ztwytm.jpeg?q=70','','',''], quantity: 1},
    {id: 49, name: 'XYZ49',price: 1295,images:['https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-ETHGZAFQY3G7DK3J_1.jpg','https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-ETHGZAFQY3G7DK3J_2.jpg','https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-ETHGZAFQY3G7DK3J_3.jpg','https://rukminim2.flixcart.com/image/200/200/xif0q/icons/original-ETHGZAFQY3G7DK3J_4.jpg'], quantity: 1},
    {id: 50, name: 'XYZ50',price: 1295,images:['https://rukminim2.flixcart.com/image/1080/1080/xif0q/ethnic-set/e/9/8/xl-tf-rani101-tribalfit-original-imah7v6anwzx34bh.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/4/l/xl-d-rbds-2024-divastri-original-imah3zycfyzxhzgn.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/2/q/i/xl-d-rbds-2024-divastri-original-imah3zychkfczt8e.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/j/z/8/xl-d-rbds-2024-divastri-original-imah3zyc5h3jggp6.jpeg?q=70'], quantity: 1},
    {id: 51, name: 'XYZ51',price: 1295,images:['https://rukminim2.flixcart.com/image/1080/1080/xif0q/ethnic-set/b/r/b/3xl-maroonkurtapantdupttaset001s-raseshwari-original-imah4bgfngthzwzs.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 52, name: 'XYZ52',price: 1295,images:['https://rukminim2.flixcart.com/image/1080/1080/xif0q/ethnic-set/y/e/o/m-chanderi-dishwa-fashion-original-imahfyrtykdwbh5b.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 53, name: 'XYZ53',price: 1295,images:['https://rukminim2.flixcart.com/image/1844/1844/xif0q/ethnic-set/n/o/q/m-kr-69-wine-kriska-original-imahgrqq5ga2kvxz.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 54, name: 'XYZ54',price: 1199,images:['https://rukminim2.flixcart.com/image/1080/1080/xif0q/salwar-kurta-dupatta/m/j/r/xxl-1663-fk-01-xxl-orriya-original-imahjh2teyjzgvyt.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 55, name: 'XYZ55',price: 1295,images:['https://rukminim2.flixcart.com/image/616/616/xif0q/salwar-kurta-dupatta/v/d/b/xl-kurta-paint-and-dupatta-set-ajantatextile-original-imahbdpgmdy7unsn.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 56, name: 'XYZ56',price: 1299,images:['https://rukminim2.flixcart.com/image/2000/2000/xif0q/salwar-kurta-dupatta/w/o/a/-original-imahegpv52saf8hs.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 57, name: 'XYZ57',price: 1399,images:['https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/e/a/g/-original-imahf77hwegfgvay.jpeg?q=70','','',''], quantity: 1},
    {id: 58, name: 'XYZ58',price: 1295,images:['https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/h/k/w/l-423-d-mokosh-original-imahgzm2huhygmkm.jpeg?q=70','','',''], quantity: 1},
    {id: 59, name: 'XYZ59',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/x/g/xl-nari-vastra-kurta-pant-dupatta-set-cartyshop-original-imaheqpnsmyxfgfy.jpeg?q=70','','',''], quantity: 1},
    {id: 60, name: 'XYZ60',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/t/j/s-wine0-subhla-art-original-imah6j8g4xmex9g8.jpeg?q=70','','',''], quantity: 1},
    {id: 61, name: 'XYZ61',price: 1295,images:['https://rukminim2.flixcart.com/image/832/832/xif0q/dress/c/j/s/xl-htdrss7124-honky-tonky-original-imahjc45m2a7t7dd.jpeg?q=70&crop=false','','',''], quantity: 1},
    {id: 62, name: 'XYZ62',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/e/8/r/xxl-a1-zwerlon-original-imahg4hszwtsvjzz.jpeg?q=70','','',''], quantity: 1},
    {id: 63, name: 'XYZ63',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/q/4/xl-d-540-marron-xl-tendy-original-imaghdb3nkey8bmt.jpeg?q=70','','',''], quantity: 1},
    {id: 64, name: 'XYZ64',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/3/t/l-v-307-black-l-brisaenterprise-original-imahjgm4ndefjvxk.jpeg?q=70','','',''], quantity: 1},
    {id: 65, name: 'XYZ65',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/f/w/i/xxl-12243-sheetal-associates-original-imahfhjk8panrgpp.jpeg?q=70','','',''], quantity: 1},
    {id: 66, name: 'XYZ66',price: 1199,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/a/i/xxl-pl-105-white-aask-original-imagw4q6zkbzbnhh.jpeg?q=70','','',''], quantity: 1},
    {id: 67, name: 'XYZ67',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/b/h/q/s-pn81-pimu-resized-2-original-imah9n7ja3kyfpfz.jpeg?q=70','','',''], quantity: 1},
    {id: 68, name: 'XYZ68',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-gown/t/0/h/xl-sleeveless-stitched-1020-fabfinds-original-imahf7bjhxmet5db.jpeg?q=70','','',''], quantity: 1},
    {id: 69, name: 'XYZ69',price: 1399,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/p/b/j/s-kasshi-2013-usk-collection-original-imahghjzk9a9yep2.jpeg?q=70','','',''], quantity: 1},
    {id: 70, name: 'XYZ70',price: 1295,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/y/q/r/-original-imahff9hkv5bqwjv.jpeg?q=70','','',''], quantity: 1},
    {id: 71, name: 'XYZ71',price: 1495,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/2/a/o/l-12463-sheetal-associates-original-imahhm3cmsazx55u.jpeg?q=70','','',''], quantity: 1},
    {id: 72, name: 'XYZ72',price: 1299,images:['https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/6/l/s-aa-00217-sky-blue-aayu-original-imah7rqytztrgrez.jpeg?q=70','','',''], quantity: 1}
    

  ];
  
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(private route: ActivatedRoute) { }

 ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.allProducts.find(p => p.id === id)!;
    this.mainImage = this.product.images[0];
  }

  selectImage(img: string) {
    this.mainImage = img;
  }

  selectSize(size: string) {
    this.product.selectedSize = size;
  }

  increaseQty() {
    if (!this.product.quantity) this.product.quantity = 1;
    this.product.quantity += 1;
  }

  decreaseQty() {
    if (!this.product.quantity) this.product.quantity = 1;
    if (this.product.quantity > 1) this.product.quantity -= 1;
  }

  addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item.prodId === this.product.id && item.size === this.product.selectedSize);
    if (existing) {
      existing.qty += this.product.quantity || 1;
      existing.total = existing.qty * this.product.price;
    } else {
      cart.push({
        image:this.mainImage,
        prodId: this.product.id,
        prodName: this.product.name,
        price: this.product.price,
        qty: this.product.quantity || 1,
        size: this.product.selectedSize,
        total: this.product.price * (this.product.quantity || 1)
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

