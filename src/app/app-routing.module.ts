import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteredListComponent } from './modules/shared/components/filtered-list/filtered-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilteredListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
