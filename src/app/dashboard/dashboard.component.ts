import { Component } from '@angular/core';
import { Preview } from '../data/interfaces/preview.model';
import { MOCK_PREVIEWS } from '../data/mocks/preview.mock';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  previews: Preview[] = MOCK_PREVIEWS


  getBigDivStyles() {
    return {
      'grid-column': '1 / 3',
      'grid-row': '1 / 3'
    };
  }

}
