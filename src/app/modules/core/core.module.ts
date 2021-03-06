import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import { ApiService } from './services/api.service';
import { MockService } from './services/mock.service';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from '@core-components/common/header/header.component';
import { FooterComponent } from '@core-components/common/footer/footer.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { StringFilterByPipe } from './pipes/string-filter.pipe';
import { DATE_FORMATS } from './constants/appConstants';
import { ContactListComponent } from '@core-components/user-dashboard/contact-list/contact-list.component';
import { UserProfileComponent } from '@core-components/user-dashboard/user-profile/user-profile.component';
import { UserDashboardComponent } from '@core-components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent,
    UserProfileComponent,
    ContactListComponent,
    OnlyNumberDirective,
    StringFilterByPipe,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatSelectSearchModule,
  ],
  providers: [
    ApiService,
    MockService,
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
})
export class CoreModule {}
