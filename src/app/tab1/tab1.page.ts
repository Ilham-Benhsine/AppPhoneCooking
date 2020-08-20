import { Recette } from './../shared/models/Recette';
import { BaseRecetteService } from './../shared/base-recette.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{

  recettes: Recette[];
  subscription$: Subscription;

  constructor(private baseRecetteService: BaseRecetteService) {
  }

  ngOnInit(){
   this.subscription$ = this.baseRecetteService.getMessageBehaviorSubject().subscribe(recettes => this.recettes = recettes,
      error => console.log(error),
      () => console.log('Finished'));
    }

    ngOnDestroy() {
      console.log('ngOnDestroy');
      if (this.subscription$) {
        this.subscription$.unsubscribe();
        console.log('this.subscription$.unsubscribe');
      }
    }
  }
