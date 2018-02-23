import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GatewayRoutingModule } from './gateway-routing.module';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShowCompanyComponent } from './showCompany/showCompany.component';
import { AddCompanyComponent } from './addCompany/addCompany.component';

import { ShowCompanyService } from './showCompany/service/showCompany.service';
import { GatewayService } from './service/gateway.service';
import { GlobalVaribles } from './../../shared/globalVariables/globalVariable';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    GatewayRoutingModule,
    FormsModule,
    ChartistModule,
    AgmCoreModule,
    NgbModule,
  ],
  declarations: [ShowCompanyComponent, AddCompanyComponent],
  providers: [ShowCompanyService, GatewayService, GlobalVaribles],
})
export class GatewayPagesModule {}