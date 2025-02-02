import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/product/model';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[]=[];
  product:any;
  skeletons:number[]=[...new Array(6)];
  error!:string;
  isLoading=false;
  category:any;
  cart: any[] = [];
  constructor(private _productService:ProductService,private router:Router){
  }
  
  ngOnInit(): void {
  this.getcategoryList()
  this.getproduct();
  }
  getcategoryList(){
    this.isLoading=true;
    this._productService.getCateory().subscribe(data=>{
      this.isLoading=false;
      this.category=data;
      this.category.unshift({id:0,name:"All"});
    });
  }
  gotoProductList(id:number){
    if(id==0){
    this.getproduct();
    }
    if(id!=0){
      this.product=this.product.filter((item:any)=>item.id==id);
    }

  }
  getproduct(){
    this._productService.getProduct().subscribe(data=>{
      this.product=data;
    })
  }
  getproductByid(id:number){
    this._productService.getProductbyid(id).subscribe(data=>{
      this.product=data;
    })
  }
  gotoProductDetail(id:number,product:any){
    this._productService.showdata.next(product)
    this.router.navigateByUrl('/product/'+id);

  }
  addToCart(product:any){
    this._productService.cartdata.subscribe(data=>{
      this.cart=data;
    });
    this.cart.push(product);
    this._productService.cartdata.next(this.cart)
    console.log(this.cart,this.cart.length);
    this._productService.cartdatalength.next(this.cart.length);
  }

}
