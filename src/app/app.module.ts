import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ProductsComponent } from './products/products.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    AboutComponent,
    SupportComponent,
    ProductsComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
