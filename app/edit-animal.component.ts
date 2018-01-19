import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h2>Details: {{childSelectedAnimal.name}}</h2>
        <h4>Species: {{childSelectedAnimal.species}}</h4>
        <h4>Age: {{childSelectedAnimal.age}}</h4>
        <h4>Diet: {{childSelectedAnimal.diet}}</h4>
        <h4>Location: {{childSelectedAnimal.location}}</h4>
        <h4>Caretakers: {{childSelectedAnimal.caretakers}}</h4>
        <h4>Sex: {{childSelectedAnimal.sex}}</h4>
        <h4>Likes: {{childSelectedAnimal.likes}}</h4>
        <h4>Dislikes: {{childSelectedAnimal.dislakes}}</h4>
        <hr>
        <h2>Edit Animal:</h2>
          <label>Enter New Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Enter New Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age"><br>
          <label>Enter New Number of Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <button (click)="doneButtonClicked()">Done</button>
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
