import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Preview } from '../data/interfaces/preview.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  preview: Preview

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Preview,
  ) {
    this.preview = data
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
