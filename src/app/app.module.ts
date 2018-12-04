import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuRoutingComponent } from './components/menu-routing/menu-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListsComponent,
    MenuComponent,
    MenuRoutingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
