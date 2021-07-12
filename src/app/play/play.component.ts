import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CardService} from "../card.service";
import {Card} from "../card";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  // Initialisation d'une varaible pour utiliser la fonction MouseOver
  changeText: boolean;

  guessCardDate: number = 0;

  constructor(private cardService: CardService, private formBuilder: FormBuilder) {
    this.changeText = false; // In initialise le booléen à faux
  }

  // Création des cartes
  guessingCardList: Card[] = []; // liste de carte à deviner (vide)
  guessingCard: Card | undefined; // carte à deviner
  cardsAlreadyGuessed: Card[] = []; // liste de cartes déjà trouvées (vide)

  // Initialisation de l'Id d'une carte
  cardId = 0;

  // Récupération de la date entrée par le joueur
  guessForm = this.formBuilder.group({

    // valeur récupérée dans le formulaire
    formDate: ''
  });

  // Fonction de gestion aléatoire d'un nb
  idAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void { // Fonction qui va s'exécuter au moment de l'affichage
    this.cardService.getCardList(1).subscribe(cardList => {

      // Remplir la liste des cartes à deviner
      this.guessingCardList = cardList;

      // Appel de la fonction changeCard
      this.changeCard(this.guessingCardList);

    });
  }

  changeCard(guessingCardList: Card []) {
    // Tirage d'un id aléatoire
    this.cardId = this.idAleatoire(0, guessingCardList.length);

    // Récupération du nb aléatoire et affichage de la carte à deviner
    this.guessingCard = guessingCardList[this.cardId];

    // Initialisation de l'attribut guessCardDate en récupérant l'année de guessingCard
    this.guessCardDate = new Date(this.guessingCard.date).getFullYear();

    console.log(this.guessingCard);
    console.log(guessingCardList);
  }

  isCorrect() {
    let submitDate = (this.guessForm.get("formDate")?.value);

    // Permet de tester l'égalité entre les dates
    if (submitDate == this.guessCardDate) {
      if (this.guessingCard) {

        // Puis mets la carte devinée dans carte trouvée
        this.cardsAlreadyGuessed.push(this.guessingCard);

        // Supprime la dernière carte affichée
        this.guessingCardList.splice(this.cardId, 1);

        // Mise à jour de la nouvelle guessingCardList
        this.changeCard(this.guessingCardList);

        // Remise à zéro du champ Date
        this.guessForm.reset(0);

      }
    }
  }
}
