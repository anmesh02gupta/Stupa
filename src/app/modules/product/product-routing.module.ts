import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:':id',
        component:ProductdetailComponent,
      },
      {
        path:'product/:id',
        component:ProductdetailComponent,
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
