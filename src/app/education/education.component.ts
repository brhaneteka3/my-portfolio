import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-education',
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EducationComponent {
    content = 'Education Works!';
    readonly panelOpenState = signal(false);
}
