import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardPlaceholderComponent } from './dashboard-placeholder/dashboard-placeholder.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardPlaceholderComponent,
    DashboardTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardPlaceholderComponent],
})
export class DashboardModule {}
