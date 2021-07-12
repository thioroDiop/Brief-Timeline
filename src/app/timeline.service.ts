import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timeline} from "./timeline";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
 // URL de l'API
  baseAPIUrl='http://localhost:8080/api/timeline';

  constructor(private http: HttpClient) { }

  // Permet d'aller chercher les données dans l'API et retourne une liste de Timeline
  getTimelineList() {
    return this.http.get<Timeline[]>(this.baseAPIUrl);
  }

  // Permet de supprimer une timeline dans l'API
  deleteTimelineList() {
    return this.http.delete(this.baseAPIUrl);
  }
}
