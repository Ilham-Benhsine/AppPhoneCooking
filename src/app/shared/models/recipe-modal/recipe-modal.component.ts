import { Recette } from './../Recette';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.scss'],
})
export class RecipeModalComponent implements OnInit {

  @Input() recipe: Recette;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  handleDismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
