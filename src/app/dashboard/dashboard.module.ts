import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AdminComponent } from './admin/admin.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { PoleManagerComponent } from './pole-manager/pole-manager.component';
@NgModule({
  declarations: [
    AdminComponent,
    ProjectManagerComponent,
    PoleManagerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule,
    PerfectScrollbarModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
