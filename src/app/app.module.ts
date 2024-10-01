import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {DisplayhellowolrdComponent} from "./components/displayhellowolrd/displayhellowolrd.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {UserageComponent} from "./components/userage/userage.component";


const routes: Routes = [
  { path: 'displayhelloworld', component: DisplayhellowolrdComponent },
  { path: 'showhellobutton', component: ShowhellobuttonComponent },
  { path: 'displayname', component: DisplaynameComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'simpleform', component: SimpleformComponent },
  { path: 'userage', component: UserageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule
  ],

  declarations: [
    AppComponent,
    DisplayhellowolrdComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent
  ],

  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
