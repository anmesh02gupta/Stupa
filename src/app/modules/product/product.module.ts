import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    ProductdetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  
})
export class ProductModule { 
}
