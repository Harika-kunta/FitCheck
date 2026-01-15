import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Main } from './main/main';
import { Product } from './product/product';
import { Traditional } from './traditional/traditional';
import { Western } from './western/western';
import { Ethnic } from './ethnic/ethnic';
import { Party } from './party/party';
import { Sarees } from './sarees/sarees';
import { Frocks } from './frocks/frocks';
import { Cart } from './cart/cart';
import { Wishlist } from './wishlist/wishlist';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Contact,
    Login,
    Main,
    Product,
    Traditional,
    Western,
    Ethnic,
    Party,
    Sarees,
    Frocks,
    Cart,
    Wishlist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
