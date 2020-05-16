import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AzSortPipe } from './pipes/az-sort/az-sort.pipe';
import { SortItemsByLabelPipe } from './pipes/sort-items-by-label/sort-items-by-label.pipe';

@NgModule({
  declarations: [AzSortPipe, SortItemsByLabelPipe],
  imports: [CommonModule],
  exports: [AzSortPipe, SortItemsByLabelPipe],
})
export class CoreModule {}
