import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  imports: [NgClass, NgIf],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
