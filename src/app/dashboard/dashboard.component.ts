import { Component } from '@angular/core';
import { Preview } from '../data/interfaces/preview.model';
import { MOCK_PREVIEWS } from '../data/mocks/preview.mock';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  previews: Preview[] = MOCK_PREVIEWS;

  getStyles(index: number) {
    if (index === 0) {
      return {
        'grid-column': '1 / 3',
        'grid-row': '1 / 3'
      };
    }
    return {};
  }

  constructor(public dialog: MatDialog) { }

  openDialog(preview: Preview): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: preview,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }


}
