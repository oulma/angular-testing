import { Injectable } from '@angular/core';
import {QuoteModel} from "../model/QuoteModel";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  public quoteList: QuoteModel[] = [];

  private daysOfTheWeeks = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  constructor() {}

  addNewQuote(quote: String) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeeks[date.getDate()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.quoteList.push(
      new QuoteModel(quote, `${dayOfTheWeek} ${day}, ${year}`)
    );
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index: number) {
    this.quoteList.splice(index, 1);
  }

  fetchQuotesFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([new QuoteModel("I love unit testing", "Mercredi 4, 2022")]);
      }, 2000);
    });
  }
}
