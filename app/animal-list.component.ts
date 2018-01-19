import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
    <div class="list">
      <h2>List of Animals: </h2>
      <h4>(Click button to edit it or to check the details)</h4>
      <ul>
        <li *ngFor="let currentAnimal of childAnimalList"> {{currentAnimal.name}}, {{currentAnimal.species}}
          <button (click)="editButtonHasBeenClicked(currentAnimal)" type="btn-danger">Edit!</button>
        </li>
      </ul>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
