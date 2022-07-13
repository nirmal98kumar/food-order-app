import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from '../../common/common.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  @ViewChild('sidenav') sideNav: ElementRef;
  constructor(private commonService:CommonService) { }

  ngOnInit() {

  }

}
