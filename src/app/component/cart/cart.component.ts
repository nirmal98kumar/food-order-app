import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Subject } from 'rxjs';
import {formatDate } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [];
  total:number=0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(public commonService:CommonService,private _snackBar: MatSnackBar) { 
    this.commonService.addToCartClicked = new Subject()
  }


  openSnackBar() {
    this._snackBar.open('Order Placed Successfully !', 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit() {
    this.calculateTotal()
    this.commonService.addToCartClicked.subscribe(data=>{
      this.total=0
      this.calculateTotal()
    })
  }

  calculateTotal(){
    this.total=0
    this.commonService.cart.forEach(item=>
      {
        this.total+=item.price*item.quantity
      })
  }

  removeItem(index){
    this.commonService.cart.splice(index,1)
    this.calculateTotal()
  }

  placeOrder(){
    let date = new Date()
    let formattedDate = formatDate(date, 'dd-MM-yyyy', 'en-US', '+0530');
    let formattedTime = formatDate(date, 'hh:mm a', 'en-US', '+0530');
    let order = {
      order_no:this.commonService.orders.length+1,
      order_time:formattedTime,
      order_date:formattedDate,
      total:this.total,
      items:this.commonService.cart
    }
    this.commonService.cart = []
    this.commonService.orders.push(order)
    this.openSnackBar()
  }

}
