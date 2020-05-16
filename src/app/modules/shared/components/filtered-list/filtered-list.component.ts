import { Component } from '@angular/core';
import { Category } from './category.enum';
import { FilteredListService } from './filtered-list.service';
import { Item } from './item';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
})
export class FilteredListComponent {
  Category = Category;

  filteredItems$ = this.filteredListService.getFilteredItems();
  filteredItems: Item[];

  constructor(private filteredListService: FilteredListService) {}

  setFilter(category: Category): void {
    this.filteredListService.setFilter(category);
  }
}
