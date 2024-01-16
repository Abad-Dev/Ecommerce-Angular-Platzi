import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toshort',
  standalone: true
})
export class ToshortPipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 30;

    if (value.length < maxLength){
      return value
    }

    let valueInList = value.split('');
    valueInList.splice(maxLength); // Le quitamos todos los elementos desde el indice maxLength

    return valueInList.join('') + '...';;
  }

}
