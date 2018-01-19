import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Animal[], desiredCompleteness) {
    var output: Animal[] = [];
    if(desiredCompleteness === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
