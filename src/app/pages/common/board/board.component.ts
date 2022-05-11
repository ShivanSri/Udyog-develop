import { Component, Input, OnInit } from '@angular/core';
import { SiteModel } from 'src/app/models/sitemodel';
// import { CardStore } from '../../../CardStore';
// import { ListSchema } from '../../../ListSchema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  //cardStore: CardStore;
  //lists: ListSchema[];
  @Input() lists: SiteModel.ListSchema[];
  constructor() { }
  // setMockData(): void {
  //   this.cardStore = new CardStore(); 
  // }

  ngOnInit() {
  }

}