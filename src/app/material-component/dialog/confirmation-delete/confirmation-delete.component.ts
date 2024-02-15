import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrl: './confirmation-delete.component.scss'
})
export class ConfirmationDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {}

  onEmitStatusChange = new EventEmitter();
  details: any = {};

  ngOnInit(): void {
    if (this.dialogData) {
      this.details = this.dialogData;
    }
  }

  handleChangeAction(){
    this.onEmitStatusChange.emit();
  }
}
