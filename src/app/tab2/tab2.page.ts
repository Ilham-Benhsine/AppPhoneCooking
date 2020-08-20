import { BaseRecetteService } from './../shared/base-recette.service';
import { Recette } from './../shared/models/Recette';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy{
  subscription$: Subscription;
  searchRecipe: string;
  recettesResultDeBase: Recette[];
  recettesResultSearch: Recette[];

  constructor(private baseRecetteService: BaseRecetteService) {
  }

  handleSearchIntoRecipes(){
    this.recettesResultSearch = this.recettesResultDeBase.filter(
      (recette) => recette.title.toUpperCase().includes(this.searchRecipe.toUpperCase())
    );
  }

  ngOnInit(){
    this.subscription$ = this.baseRecetteService.getMessageBehaviorSubject()
    .subscribe(recettesResultDeBase => {
      this.recettesResultDeBase = recettesResultDeBase;
      this.recettesResultSearch = recettesResultDeBase;
    },
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
