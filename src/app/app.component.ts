import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, RouterOutlet,MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome to my Portfolio!';
}
