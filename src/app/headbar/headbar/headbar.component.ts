import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-headbar',
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatMenuModule,
  ],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.css',
})
export class HeadbarComponent {}
