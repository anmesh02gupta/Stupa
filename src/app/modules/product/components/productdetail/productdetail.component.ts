import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit{
  isLoading=false;
  selectedSize!:string;
  category!:string;
  data:any;
  relatedProductList:Product[]=[];
  ratingList:boolean[]=[];
  images!:string[];
  product!:Product;
  imageSrc!:string;
  selectedImage!:number;
  discount=0;
  title:string='';
  cart:any;
  constructor(private route:ActivatedRoute, private productService:ProductService, private cartService:CartService, private router:Router){}

  ngOnInit(): void {
    // this.getProduct();
    // // this.cart=this.cartService.getCart;
    // this.route.params.subscribe(()=>{
    //   this.getProduct();
    //   this.scrollToTop();
    // })
    this.productService.cartdata.subscribe(data=>{
      this.cart=data;
    });
    this.productService.showdata.subscribe((data:any)=>{
      console.log(data,data.id);
      this.data=data;
    })
  }

  addToCart(){
    this.cart.push(this.data);
    this.productService.cartdata.next(this.cart)
    this.productService.cartdatalength.next(this.cart.length);
  }

  
}
