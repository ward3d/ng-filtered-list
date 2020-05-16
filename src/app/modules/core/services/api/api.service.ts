import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/modules/shared/components/filtered-list/item';
import * as AllItems from './items.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  // Fake API call
  // Superfluous map of the array, but using it to demonstrate how to map objects that might not match easily
  // return of(AllItems.items).pipe(map((items) => items as Item[])); would have worked just as well in this case
  getAllItems(): Observable<Item[]> {
    return of(AllItems.items).pipe(
      map((items) =>
        items.map(
          (item) =>
            ({
              id: item.id,
              label: item.label,
              categories: item.categories,
              imageUrl: item.imageUrl,
            } as Item)
        )
      )
    );
  }
}
