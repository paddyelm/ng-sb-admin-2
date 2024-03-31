import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { MainTopNavComponent } from './shared/components/main-top-nav/main-top-nav.component';
import { CommonUtilsService } from './shared/services/common-utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MainSidebarComponent,
    MainTopNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-sb-admin-2';

  constructor(protected commonUtils: CommonUtilsService) {}
}
