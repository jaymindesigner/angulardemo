import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './MyComponent/slider/slider.component';
import { ServiceComponent } from './MyComponent/service/service.component';
import { ContactComponent } from './Mycomponent/contact/contact.component';
import { HomeComponent } from './mycomponent/home/home.component';
import { AboutComponent } from './MyComponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServiceComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
