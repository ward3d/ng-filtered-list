import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { FilteredListComponent } from './components/filtered-list/filtered-list.component';

@NgModule({
  declarations: [FilteredListComponent],
  imports: [CommonModule, CoreModule],
  exports: [FilteredListComponent],
})
export class SharedModule {}
