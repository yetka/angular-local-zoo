import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <div class="details">
        <h2><strong>Details: </strong><span id="name">{{childSelectedAnimal.name}}</span></h2>
        <h4><strong>Species: </strong>{{childSelectedAnimal.species}}</h4>
        <h4><strong>Age: </strong>{{childSelectedAnimal.age}}</h4>
        <h4><strong>Diet: </strong>{{childSelectedAnimal.diet}}</h4>
        <h4><strong>Location: </strong>{{childSelectedAnimal.location}}</h4>
        <h4><strong>Caretakers: </strong>{{childSelectedAnimal.caretakers}}</h4>
        <h4><strong>Sex: </strong>{{childSelectedAnimal.sex}}</h4>
        <h4><strong>Likes: </strong>{{childSelectedAnimal.likes}}</h4>
        <h4><strong>Dislikes: </strong>{{childSelectedAnimal.dislakes}}</h4>
      </div>
      <div class="edit">
        <h2>Edit Animal:</h2>
        <br>
        <label>Enter New Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name"><br>
        <label>Enter New Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age"><br>
        <label>Enter New Number of Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
        <br>
        <button (click)="doneButtonClicked()">Done!</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
