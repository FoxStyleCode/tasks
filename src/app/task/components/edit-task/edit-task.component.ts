import { Component } from '@angular/core';

import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html'
})
export class EditTaskComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
  ) { }

  task:Data = {
    id: this.data.id,
    name: this.data.name,
    status: this.data.status
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
