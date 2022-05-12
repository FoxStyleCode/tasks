import { Component, OnInit } from '@angular/core';
import { Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '../../interfaces/tasks.interface';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-newTask',
  templateUrl: './newTask.component.html'
})
export class NewTaskComponent implements OnInit {

  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
  ) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
