import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
    <div class="list">
      <h3>Choose the option below to see list:</h3>
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals"> All Animals </option>
        <option value="youngAnimals"> Young Animals </option>
        <option value="matureAnimals" selected="selected"> Mature Animals </option>
      </select>
      <h2>List of Animals: </h2>
      <h4>(Click button to edit it or to check the details)</h4>
      <ul>
        <li *ngFor="let currentAnimal of childAnimalList | completeness:filterByCompleteness">{{currentAnimal.name}}, {{currentAnimal.species}}
          <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </li>
      </ul>
    </div>
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
