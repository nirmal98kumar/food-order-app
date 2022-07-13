import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { MatTableDataSource } from "@angular/material";
import { MatSort, Sort ,MatPaginator} from "@angular/material";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements AfterViewInit, OnInit {

  value
  datasource: MatTableDataSource<any>;
  sumOfEachItemOrderedinMenu = []
  selectedType
  selectedCuisine
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['order_no', 'order_date', 'items', 'total'];
  constructor(public common: CommonService) {
  }

  ngOnInit() {
    this.datasource = new MatTableDataSource(this.common.orders)
    this.datasource.filterPredicate = (data: any, filter: string) => {
      let isItemsInOrder = false
      if(this.selectedType || this.selectedCuisine ){
          data.items.forEach(item => {
            if (item.type == this.selectedType || item.cuisine == this.selectedCuisine) 
            {
              isItemsInOrder = true
            }
          })
        return isItemsInOrder
      }
      else{
        data.items.forEach(item => {
          if (item.name.toLocaleLowerCase().indexOf(filter) != -1) {
            isItemsInOrder = true
          }
        })
        return isItemsInOrder || data.order_no.toString().toLocaleLowerCase().indexOf(filter) != -1 || data.order_date.toString().toLocaleLowerCase().indexOf(filter) != -1
      }

    }
  }


  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  filterFrequentOrderItem(){
    this.common.orders.forEach(orderItem=>{
      orderItem.items.forEach(item=>{
        if(!this.sumOfEachItemOrderedinMenu[item.name]){
          this.sumOfEachItemOrderedinMenu[item.name] = 0
        }
        this.sumOfEachItemOrderedinMenu[item.name] +=1
      })
    })

    let t = Object.keys(this.sumOfEachItemOrderedinMenu).reduce((a, b) => 
      this.sumOfEachItemOrderedinMenu[a] > this.sumOfEachItemOrderedinMenu[b] ? a : b
    );

    this.datasource.filter = t.trim().toLowerCase();

  }

  foodTypeFilter(event){
    this.selectedType = event.value
    this.selectedCuisine = false
    if(!event.value){
      this.clearFilter()
      this.selectedType = false
      return
    }
    this.datasource.filter = event.value.trim().toLowerCase();
  }

  foodCuisineFilter(event){
    this.selectedCuisine = event.value
    this.selectedType = false
    if(!event.value){
      this.clearFilter()
      this.selectedCuisine = false
      return
    }
    this.datasource.filter = event.value.trim().toLowerCase();
  }

  freqOrderFilter(event): void {
    if(event.checked){
      this.filterFrequentOrderItem()
    }
    else{
      this.clearFilter()
    }
  }

  clearFilter(){
    let str= ""
    this.datasource.filter = str.trim().toLowerCase()
  }

}
