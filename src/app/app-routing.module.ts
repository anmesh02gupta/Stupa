import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { Page404Component } from './core/components/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'service',
    component:HomeComponent
  },
  {
    path:'about',
    component:HomeComponent
  },
  {
    path:'category_id/:id',
    component:HomeComponent
  },
  {
    path:'product',
    loadChildren:()=>import('./modules/product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'**',
    component:Page404Component,
    data:{message:'Oops... This is a Bad request'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
