import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HTTP_PROVIDERS,HttpModule } from '@angular/http';
import { ProductsComponent } from './products/products.component';
import { ProducerComponent } from './producer/producer.component';
import { MachineryComponent } from './machinery/machinery.component';
import { FactoryComponent } from './factory/factory.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    ProducerComponent,
    MachineryComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [HTTP_PROVIDERS],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
