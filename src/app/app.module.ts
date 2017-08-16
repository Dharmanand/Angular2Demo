import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { TemplateFormComponent } from './practices/templateFormModel/templateForm.component';
import { ReactiveFormComponent } from './practices/reactive/reactiveForm.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { ItemComponent } from './grocery/items/item-component';

const appRoutes: Routes = [
  {path: 'template', component: TemplateFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: '', component: TemplateFormComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, TemplateFormComponent, ItemComponent, ReactiveFormComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers:    []
})
export class AppModule { }
