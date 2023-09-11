import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { MaterialModule } from './material.module';
import { ItemComponent } from './components/item/item.component';

// import {MAT_THEME_NAME} from '@angular/material/core/'
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    // {provide: MAT_THEME_NAME, useValue: 'pink-bluegrey'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
