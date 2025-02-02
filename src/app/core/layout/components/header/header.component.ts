import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/modules/product/model';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { MENU } from 'src/app/shared/constant';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartlength=0
  cart:any;
  constructor(private ProductService: ProductService,private cartService:CartService, public authService:AuthService){
  }
  total=0;
  ngOnInit(): void {
  this.ProductService.cartdatalength.subscribe((data:any)=>{
    this.cartlength=data;
  })
  this.ProductService.cartdata.subscribe((data:any)=>{
    console.log(data)
    this.cart=data;
    this.total=0;
    this.cart.forEach((item:any)=>{
      this.total=this.total+item.price;
    })
  })
  }
  clickAbout(){
    console.log('clicked');
  }
  clickServices(){
    console.log('clicked');
  }
  opencart=false;
  clickCart(){
    this.opencart=true;
  }
  closeNav() {
    this.opencart=false;
  }
}
