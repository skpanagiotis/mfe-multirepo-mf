import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPlaceholderComponent } from './dashboard-placeholder/dashboard-placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPlaceholderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
