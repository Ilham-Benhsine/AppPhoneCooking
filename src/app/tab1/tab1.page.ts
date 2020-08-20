import { Recette } from './../shared/models/Recette';
import { BaseRecetteService } from './../shared/base-recette.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  recettes: Recette[];
  subscription$: Subscription;

  constructor(private baseRecetteService: BaseRecetteService) {
    this.baseRecetteService.getMessageBehaviorSubject().subscribe(recettes => this.recettes = recettes, error => console.log(error), 
    () => console.log('Finished'));
  }

  ngOnInit(){
  //  this.subscription$ = this.baseRecetteService.getMessageBehaviorSubject().subscribe(recettes: Recette[]) => {
  //    // Next
  //    console.log('CallObservableComponent Next', value);
  //    this.rectte = value;
  //  }
  }
}
