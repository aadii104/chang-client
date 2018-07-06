import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LivePreviewComponent } from './livePreview/livePreview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingSidebarComponent } from './settingSidebar/settingSidebar.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
// import { NgbDateCustomParserFormatter } from './globalVariables/datePipe';

import { GlobalVaribles } from './globalVariables/globalVariable';
import { NavbarService } from './navbar/navbar.service';
import { LivePreviewService } from './livePreview/livePreview.service';
import { BreadcrumbsService } from './breadcrumbs/breadcrumbs.service';
@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    LivePreviewComponent,
    SidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    SettingSidebarComponent,
    ToggleFullscreenDirective,
    BreadcrumbsComponent,
    NgbModule,
    // NgbDateCustomParserFormatter,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    AvatarModule,
    NgSelectModule,
  ],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    NavbarComponent,
    LivePreviewComponent,
    SidebarComponent,
    SettingSidebarComponent,
    CustomizerComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
  ],
  providers: [
    NavbarService,
    GlobalVaribles,
    BreadcrumbsService,
    LivePreviewService,
  ],
})
export class SharedModule {}
