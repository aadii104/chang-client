import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountSettingRoutingModule } from './accountSettings-routing.module';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EditProfileComponent } from './editProfile/editProfile.module';
// import { InvoicePageComponent } from './invoice/invoice-page.component';
// import { HorizontalTimelinePageComponent } from './timeline/horizontal/horizontal-timeline-page.component';
// import { VerticalTimelinePageComponent } from './timeline/vertical/vertical-timeline-page.component';
// import { UserProfilePageComponent } from './user-profile/user-profile-page.component';
// import { SearchComponent } from './search/search.component';
// import { FaqComponent } from './faq/faq.component';
// import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';

@NgModule({
  imports: [CommonModule, AccountSettingRoutingModule, FormsModule, ChartistModule, AgmCoreModule, NgbModule],
  declarations: [
    EditProfileComponent,
    // InvoicePageComponent,
    // HorizontalTimelinePageComponent,
    // VerticalTimelinePageComponent,
    // UserProfilePageComponent,
    // SearchComponent,
    // FaqComponent,
    // KnowledgeBaseComponent
  ],
})
export class AccountSettingsModule {}
