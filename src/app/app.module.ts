import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuModule } from './modules/menu/menu.module';
import { OrderModule } from './modules/order/order.module';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { CommonService } from './common/common.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    OrderModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule 
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
