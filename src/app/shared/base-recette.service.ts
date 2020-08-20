import { Recette } from './models/Recette';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseRecetteService {

  recette1 = new Recette('Ratatouille au Companion', 'ça lair bon', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2019.2F06.2F21.2F0a8803df-fcca-42ba-b953-3efaa375d1ee.2Ejpeg/748x372/quality/90/crop-from/center/ratatouille-au-companion.jpeg');
  recette2 = new Recette('Sushis de Noël', 'cest cru', 'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2Fcdb4fd4a-7919-429f-8dc6-15486827ab8a.2Ejpeg/748x372/quality/90/crop-from/center/sushis-de-noel.jpeg');
  recettes = Recette[
    this.recette1,
    this.recette2
  ];
  messageBehaviorSubject$ = new BehaviorSubject<Recette[]>(this.recettes);

  getMessageBehaviorSubject(): Observable<Recette[]> {
    return this.messageBehaviorSubject$.asObservable();
  }

  errorMessageBehaviorSubject() {
    this.messageBehaviorSubject$.error('Il y a une erreur !');
  }

  completeMessageBehaviorSubject() {
    this.messageBehaviorSubject$.complete();
  }

  constructor() { }
}
