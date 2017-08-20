import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';
import { ContactComponent }  from './contact/contact.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, appRouting ],
  declarations: [ AppComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
