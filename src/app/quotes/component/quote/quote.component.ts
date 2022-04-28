import { Component, OnInit } from '@angular/core';
import {QuoteModel} from "../../model/QuoteModel";
import {QuoteService} from "../../service/quote.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quoteList: QuoteModel[]=[];
  public fetchedList: QuoteModel[]=[];
  // @ts-ignore
  public quoteText: String = null;

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    // @ts-ignore
    this.service.fetchQuotesFromServer().then((data: QuoteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    // @ts-ignore
    this.quoteText = null;
  }

  removeQuote(index: number) {
    this.service.removeQuote(index);
  }

}
