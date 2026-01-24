import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AuthGuard } from './auth-guard';
import { Register } from './register/register';
import { Order } from './order/order';


const routes: Routes = [
  {path:"",component:Main},
  {path:"frocks",component:Frocks},
  {path:"sarees",component:Sarees},
  {path:"party",component:Party},
  {path:"ethnic",component:Ethnic},
  {path:"traditional",component:Traditional},
  {path:"western",component:Western},
  {path:"product/:id",component:Product},
  {path:"contact",component:Contact},
  {path:"about",component:About},
  {path:"login",component:Login},
  {path:"cart",component:Cart},
  {path: "wishlist",component:Wishlist},
  { path: "dashboard", component: Dashboard, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch:'full'},
  {path:"register",component:Register},
  {path:"order",component:Order} , 

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
