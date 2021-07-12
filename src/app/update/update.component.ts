import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";

@Component({
  selector: 'app-modify',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  cardList = this.cardService.getCardList(1);

    constructor(private cardService: CardService) {
  }

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
