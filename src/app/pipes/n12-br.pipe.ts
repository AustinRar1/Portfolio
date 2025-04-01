import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'n12Br'
})
export class N12BrPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }
}
