import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { OnborderedComponent } from './onbordered/onbordered.component';
import { GenerateComponent } from './generate/generate.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    NavbarComponent,
    OnborderedComponent,
    GenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
