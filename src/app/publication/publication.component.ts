import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-publication',
  imports: [MatCardModule],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss'
})
export class PublicationComponent {
    content = 'Publication Works!';
}
