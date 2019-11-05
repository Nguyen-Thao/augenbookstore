import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookList } from './shop/booklist.component';
import { Cart } from './shop/cart.component';
import { Shop } from './shop/shop.component';
import { DataService } from './shared/dataService';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

let routes = [
    { path: "", component: Shop }
];

@NgModule({
  declarations: [
        AppComponent,
        BookList,
        Cart,
        Shop
    ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: true //for debugging of the routing
      }),
      NgbModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule
  ],
    providers: [
        DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
