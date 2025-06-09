import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, RouterOutlet,MatSidenavModule, 
    MatIconModule, FontAwesomeModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome to my Portfolio!';
  stackoverflowUrl: string = 'https://stackoverflow.com';
  linkedinUrl: string = 'https://www.linkedin.com/in/brhaneteka/';
  facebookUrl:string = 'https://www.facebook.com';
  xUrl:string = 'https://x.com/brhane_bt';
  githubUrl:string = 'https://github.com/brhaneteka3';
  oldGithubUrl:string = 'https://github.com/brhanebt';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon('x',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/x.svg'));
  }
}
