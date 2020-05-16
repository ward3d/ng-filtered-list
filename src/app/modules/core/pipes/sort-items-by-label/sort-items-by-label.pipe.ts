import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/modules/shared/components/filtered-list/item';

@Pipe({
  name: 'sortItemsByLabel',
})
export class SortItemsByLabelPipe implements PipeTransform {
  transform(items: Item[]): Item[] {
    return items.sort((a, b) => (a.label > b.label ? 1 : -1));
  }
}
