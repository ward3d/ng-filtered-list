import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'azSort',
})
export class AzSortPipe implements PipeTransform {
  transform(strings: string[]): string[] {
    return strings.sort();
  }
}
