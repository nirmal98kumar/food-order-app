import { Injectable } from '@angular/core';
import { Subject,Observable,of } from 'rxjs';
import { MenuItem } from '../model/menu.model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  addToCartClicked: Subject<boolean>;

  cart = []

  constructor() {
    this.addToCartClicked = new Subject()
   }

  getTodos(): Observable<any> {
    return of(this.menu);
  }

  menu = [{
    name: "Dosa",
    type: "Veg",
    cuisine: "South Indian",
    availability: ['Breakfast', 'Lunch'],
    price: 25,
    img:"../../../assets/img/dosa.jpg"
  },
  {
    name: "Idly",
    type: "Veg",
    cuisine: "South Indian",
    availability: ['Breakfast', 'Dinner'],
    price: 25,
    img:"../../../assets/img/idly.jpg"
  },
  {
      name: "Roti",
      type: "Veg",
      cuisine: "North Indian",
      availability: ['Breakfast','Lunch', 'Dinner'],
      price: 25,
      img:"../../../assets/img/roti.png"
  },
  {
      name: "Mushroom Briyani",
      type: "Veg",
      cuisine: "Indian",
      availability: ['Breakfast','Lunch', 'Dinner'],
      price: 150,
      img:"../../../assets/img/mushroom-biryani.jpg"
  },
  {
      name: "Chicken Briyani",
      type: "Non-Veg",
      cuisine: "Indian",
      availability: ['Lunch', 'Dinner'],
      price: 200,
      img:"../../../assets/img/chicken-biryani.jpg"
  },
  {
      name: "Panner Masala",
      type: "Veg",
      cuisine: "North Indian",
      availability: ['Lunch', 'Dinner'],
      price: 210,
      img:"../../../assets/img/paneer masala.jpg"
  },
  {
    name: "Pizza",
    type: "Veg",
    cuisine: "Italian",
    availability: ['Lunch', 'Dinner'],
    price: 300,
    img:"../../../assets/img/pizza.jpg"
  },
  {
    name: "Chicken Tandoori",
    type: "Non-Veg",
    cuisine: "Arabian",
    availability: ['Dinner'],
    price: 250,
    img:"../../../assets/img/tandoori chicken.jpg"
  },
  {
    name: "Grilled Chicken",
    type: "Non-Veg",
    cuisine: "Arabian/North Indian",
    availability: ['Dinner'],
    price: 250,
    img:"../../../assets/img/grilled chicken.jpg"
  },
  {
    name: "Lime Soda",
    type: "Veg",
    cuisine: "Drinks",
    availability: ['Lunch','Dinner'],
    price: 50,
    img:"../../../assets/img/lime soda.jpg"
  },
  {
    name: "Tea",
    type: "Veg",
    cuisine: "Drinks",
    availability: ['Breakfast', 'Lunch' , 'Dinner'],
    price: 10,
    img:"../../../assets/img/tea.jpg"
  },
  ]

  orders = [
    {
      order_no:1,
      order_time:"2.30 PM",
      order_date:"10-07-2022",
      total:550,
      items:[
        {
          name:"Dosa",
          type:"Veg",
          cuisine:"South Indian",
          price:50,
          quantity:2
        },
        {
          name:"Pizza",
          type:"Veg",
          cuisine:"Italian",
          price:500,
          quantity:1
        }
      ]
    },
    {
    order_no:2,
      order_time:"12.30 PM",
      order_date:"12-07-2022",
      total:20,
      items:[
        {
          name:"Tea",
          type:"Veg",
          cuisine:"Drinks",
          price:20,
          quantity:1
        }
      ]
    },
    {
      order_no:3,
        order_time:"10.30 AM",
        order_date:"02-05-2022",
        total:150,
        items:[
          {
            name:"Mushroom Briyani",
            type:"Veg",
            cuisine:"Indian",
            price:150,
            quantity:1
          }
        ]
    },
    {
      order_no:4,
        order_time:"05.30 PM",
        order_date:"21-04-2022",
        total:700,
        items:[
          {
            name:"Chicken Briyani",
            type:"Non-Veg",
            cuisine:"Indian",
            price:200,
            quantity:1
          },
          {
            name: "Chicken Tandoori",
            type: "Non-Veg",
            cuisine: "Arabian",
            price: 250,
            quantity:1
          },
          {
            name: "Grilled Chicken",
            type: "Non-Veg",
            cuisine: "Arabian",
            price: 250,
            quantity:1
          },
        ]
    },
    {
        order_no:5,
          order_time:"03.30 PM",
          order_date:"11-02-2022",
          total:500,
          items:[
            {
              name: "Chicken Tandoori",
              type: "Non-Veg",
              cuisine: "Arabian",
              price: 250,
              quantity:1
            },
            {
              name: "Grilled Chicken",
              type: "Non-Veg",
              cuisine: "Arabian",
              price: 250,
              quantity:1
            },
          ]
    },
    {
      order_no:6,
        order_time:"03.30 PM",
        order_date:"10-02-2022",
        total:250,
        items:[
          {
            name: "Grilled Chicken",
            type: "Non-Veg",
            cuisine: "Arabian",
            price: 250,
            quantity:1
          },
        ]
  }
  ]

}
