import { Component } from '@angular/core';
import { HeadbarComponent } from '../headbar/headbar/headbar.component';
import { SidenavComponent } from '../sidebar/sidenav/sidenav.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [HeadbarComponent, SidenavComponent, NgClass],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
