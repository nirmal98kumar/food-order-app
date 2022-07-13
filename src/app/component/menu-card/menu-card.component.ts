import { Component, OnInit , Input} from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  menuList = [];
  length
  value
  constructor(public common:CommonService) { }

  ngOnInit() {
    this.common.getTodos().subscribe(data=>{
      this.menuList = data
      this.length = data.length
    })
  }

  addItemToCart(item){
    this.common.cart.push(item)
    this.common.addToCartClicked.next(true)
  }

}
