import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import {By} from "@angular/platform-browser";
import {QuoteModel} from "../../model/QuoteModel";
import {QuoteService} from "../../service/quote.service";

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('il faut creer une composant de Quote', () => {
    expect(component).toBeTruthy();
  });

  it("il faut utiliser quoteList de la service", () => {
    const quoteService = fixture.debugElement.injector.get(QuoteService);
    fixture.detectChanges();
    expect(quoteService.getQuote()).toEqual(component.quoteList);
  });



  it("il faut desactiver le button lorsque textArea est vide", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it("il faut activer le button lorsque textArea est non vide", () => {
    component.quoteText = "I love this test";
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });


  it("il faut afficher le data de manière asynchrone", async () => {
    const fakedFetchedList = [
      new QuoteModel("I love unit testing", "Jeudi 4, 2022")
    ];

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.fetchedList).toBe(fakedFetchedList);
    });
  });
});
