import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfigDialogComponent } from '../mat-config-dialog/mat-config-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialogue(msg) {
    return this.dialog.open(MatConfigDialogComponent, {
      width: "390px",
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top: "10px"},
      data: {
        message: msg
      }
    });
  }
}
