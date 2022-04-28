import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuoteComponent} from "./quotes/component/quote/quote.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: QuoteComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
