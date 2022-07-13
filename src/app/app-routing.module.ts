import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './modules/menu/menu.component';
import { OrderComponent } from './modules/order/order.component';
const routes: Routes = [
  {
    path:'',
    component:MenuComponent,
    pathMatch:'full'
  },
  {
    path:'order',
    component:OrderComponent,
    pathMatch:'full'
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
