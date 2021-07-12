import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "./card";


@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseAPIUrl='http://localhost:8080/api/timeline';

  constructor(private http: HttpClient) { }

  // Permet d'aller chercher les données dans l'API et retourne une liste de cartes
  getCardList(id:number) {
    return this.http.get<Card[]>(this.baseAPIUrl+ '/' + id + '/card/');
  }

  // Permet de supprimer une carte
  deleteCardList(tid:number, cid:number ) {
    return this.http.delete<Card[]>(this.baseAPIUrl + '/' + tid + '/card/' + cid);

  }
}
