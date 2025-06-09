import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';

export const routes: Routes = [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'education', component: EducationComponent },
            { path: 'experience', component: ExperienceComponent },
            { path: 'certification', component: CertificationComponent},
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '**', redirectTo: '/home' }
          ];
