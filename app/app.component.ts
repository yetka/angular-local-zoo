import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="jumbotron">Local Zoo</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="lists">
            <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
          </div>
          <div>
            <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
          </div>
        </div>
        <div class="col-md-6" id="add-new-animal">
          <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
          <br>
          <img src="resources/images/zoo.jpg" alt="zoo image">
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises')
  ];

  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
