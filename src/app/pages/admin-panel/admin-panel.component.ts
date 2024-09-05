import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AdminViewUserComponent } from './user-management/components/admin-view-user/admin-view-user.component';
import { AdminVisitPurposeTableComponent } from './visit-purpose-management/admin-visit-purpose-table/admin-visit-purpose-table.component';
import { AdminViewRoleComponent } from './role-management/admin-view-role/admin-view-role.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { LocationManagementComponent } from './location-management/location-management.component';
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    TabViewModule,
    AdminViewUserComponent,
    AdminVisitPurposeTableComponent,
    LocationManagementComponent,
    AdminViewRoleComponent,
    DeviceManagementComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {}
