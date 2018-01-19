import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
    <label>Searching options</label>
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals"> All Animals </option>
      <option value="youngAnimals"> Young Animals </option>
      <option value="matureAnimals" selected="selected"> Mature Animals </option>
    </select>
    <h1>List of Animals</h1>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | completeness:filterByCompleteness">{{currentAnimal.name}}, {{currentAnimal.species}}
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "matureAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }
}
