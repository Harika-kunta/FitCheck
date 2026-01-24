import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './register/register';
import { Order } from './order/order';


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
    Wishlist,
    About,
    Dashboard,
    Register,
    Order,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
