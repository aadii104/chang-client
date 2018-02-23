import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountSettingRoutingModule } from './accountSettings-routing.module';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EditProfileComponent } from './editProfile/editProfile.component';
import { MeProfileComponent } from './me/me.component';
import { PasswordChangeProfileComponent } from './passwordChange/passwordChange.component';
import { MailSubsProfileComponent } from './mailSubs/mailSubs.component';
import {  ContributorsComponent} from './contributors/contributors.component';
import {UpgradeProfileComponent} from './upgrade/upgrade.component';

@NgModule({
  imports: [CommonModule, AccountSettingRoutingModule, FormsModule, ChartistModule, AgmCoreModule, NgbModule],
  declarations: [
    EditProfileComponent,
    MeProfileComponent,
    PasswordChangeProfileComponent,
    MailSubsProfileComponent,
    ContributorsComponent,
    UpgradeProfileComponent
  ],
  providers: [],
})
export class AccountSettingsModule {}