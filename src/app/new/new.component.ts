import { Component, OnInit } from '@angular/core';
import {CardService} from "../card.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  cardList=this.cardService.getCardList(1);


  // cardList = [
  //   {
  //     id: 55,
  //     name:"test",
  //     date:1/1/2021,
  //     imageUrl : "data:image/jpeg;base64",
  //     description:"Petit et jaune",
  //   }]

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
  }

  saveTimeline() {

  }

  newCard() {

  }

  saveCard() {

  }

  updateCard(card: any) {

  }

  deleteCard(card: any) {

  }
}
