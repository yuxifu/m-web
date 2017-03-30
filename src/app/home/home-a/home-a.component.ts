import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit {

  title = 'Angular 2 FlexLayout Demo';

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  selectedOption: string;

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
