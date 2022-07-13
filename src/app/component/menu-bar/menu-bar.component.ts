import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private router:Router , private commonService:CommonService) { }
  ngOnInit() {
  }

  navigate(page){
    if(page == 'order')
      this.router.navigate(['/order'])
    else
      this.router.navigate(['/menu'])

  }

}
