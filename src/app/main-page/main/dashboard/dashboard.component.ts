import { Component } from '@angular/core';
import { Preview } from '../../../data/interfaces/preview.model';
import { MOCK_PREVIEWS } from '../../../data/mocks/preview.mock';
import { DialogComponent } from '../../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  previews: Preview[] = MOCK_PREVIEWS;

  animationDirections: ('right' | 'left' | 'up' | 'down')[] = ['left', "down", 'right', "up"]

  constructor(public dialog: MatDialog) { }


  getGridStyles(index: number) {
    if (index === 0) {
      return {
        'grid-column': '1 / 3',
        'grid-row': '1 / 3'
      };
    }

    return {};
  }

  openDialog(preview: Preview): void {
    this.dialog.open(DialogComponent, {
      data: preview,
    },);
  }


}
