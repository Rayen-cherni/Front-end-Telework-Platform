import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PoleManagerRoutingModule } from './pole-manager-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Material from "@angular/material";
import { PlanificationComponent } from './planification/planification.component';
import { PopUpPlanificationComponent } from './planification/pop-up-planification/pop-up-planification.component';
import { MyPoleComponent } from './my-pole/my-pole.component';
import { PopUpEditPoleComponent } from './my-pole/pop-up-edit-pole/pop-up-edit-pole.component';


@NgModule({
  declarations: [
    PlanificationComponent,
    PopUpPlanificationComponent,
    MyPoleComponent,
    PopUpEditPoleComponent
  ],
  imports: [
    CommonModule,
    PoleManagerRoutingModule,
    NgxEchartsModule,
    PerfectScrollbarModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Material.MatDialogModule
  ],
  exports: [Material.MatDialogModule
  ],
  entryComponents:[PopUpPlanificationComponent,PopUpEditPoleComponent]
})
export class PoleManagerdModule { }
