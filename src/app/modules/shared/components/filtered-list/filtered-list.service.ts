import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/modules/core/services/api/api.service';
import { Category } from './category.enum';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class FilteredListService {
  allItems$ = this.apiService.getAllItems();

  private filter = new BehaviorSubject(Category.None);
  filter$ = this.filter.asObservable();

  constructor(private apiService: ApiService) {}

  filterItemsByCategory(items: Item[], category: Category): Item[] {
    if (category) {
      return items.filter((i) => i.categories.includes(category));
    }

    return items;
  }

  getFilteredItems(): Observable<Item[]> {
    return combineLatest(this.allItems$, this.filter$).pipe(
      map(([items, category]) => this.filterItemsByCategory(items, category))
    );
  }

  setFilter(category: Category): Category {
    this.filter.next(category);

    return category;
  }
}
