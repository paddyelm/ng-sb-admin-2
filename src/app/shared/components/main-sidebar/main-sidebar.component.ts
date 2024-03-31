import { Component } from '@angular/core';
import { CommonUtilsService } from '../../services/common-utils.service';

@Component({
  selector: '[app-main-sidebar]',
  standalone: true,
  imports: [],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss',
})
export class MainSidebarComponent {
  constructor(private commonUtilService: CommonUtilsService) {}

  /**
   *
   * Toggles the collapsing of the main side bar
   *
   */
  toggleCollapseMainSidebar() {
    this.commonUtilService.toggleSideMenuCollapse();
  }
}
