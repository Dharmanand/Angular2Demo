import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {TemplateDrivenFormComponent} from './practices/templateDrivenForm/templatedrivenform-component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TemplateDrivenFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
