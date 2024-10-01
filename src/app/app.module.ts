import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {DisplayhellowolrdComponent} from "./components/displayhellowolrd/displayhellowolrd.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";


const routes: Routes = [
  { path: 'displayhelloworld', component: DisplayhellowolrdComponent },
  { path: 'showhellobutton', component: ShowhellobuttonComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],

  declarations: [
    AppComponent,
    DisplayhellowolrdComponent,
    ShowhellobuttonComponent
  ],

  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
