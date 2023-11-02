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

  constructor(public dialog: MatDialog) { }

  getStyles(index: number) {
    const baseStyles: any = {
      'animation-delay': `${index * 0.1}s`
    };


    return baseStyles;
  }


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
