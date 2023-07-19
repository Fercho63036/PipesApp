import { Pipe, PipeTransform } from '@angular/core';

// Ariel | toggleCase = 'ARIEL'
// ARIEL | toggleCase = 'ariel'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.toUpperCase();
  }

}
