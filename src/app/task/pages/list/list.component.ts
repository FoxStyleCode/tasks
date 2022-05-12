import { Component, OnInit } from '@angular/core';
import { Data, Link } from '../../interfaces/tasks.interface';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../../components/newTask/newTask.component';
import { 
  MatSnackBar, 
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, 
} from '@angular/material/snack-bar';
import { EditTaskComponent } from '../../components/edit-task/edit-task.component';
import { TasksService } from '../../services/tasks.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(
  private taskService: TasksService, 
  public dialog: MatDialog,
  private _snackBar: MatSnackBar,
  ) { }

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 3;

  length = 0;
  pageSize = 0;

  pageEvent!: PageEvent;
  
  Tasks : Data[] = [];
  Link : Link[] = [];
  load: boolean = false;

  ngOnInit():void {
    this.loadTask();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {

      this.load = true;

      if(result){
        
        this.taskService.saveTask( result ).
          subscribe(task => {
            if(task){
              this._snackBar.open(task.msg + " ☃ ", 'Cerrar', {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: this.durationInSeconds * 1000,
              });
              this.Tasks.push(task.data);
              this.load = false;
            }
        });

      }else{
        this.load = false;
      }


    });

  }

  editar(task:Data){
    this.openEditDialog(task);
  }

  eliminar(task:Data){

    this.taskService.deleteTask(task).subscribe(resp => {
      if(resp){
        this._snackBar.open(resp.msg + " 🍕", 'Cerrar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        this.loadTask();
      }
    });

  }

  loadTask(){
    this.taskService.getTasks().subscribe( resp => {
      this.Tasks = resp.data;
    });
  }

  mostrarSnakbar(mensaje: string){
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: this.durationInSeconds * 1000,
    });
  }

  openEditDialog(task: Data): void {

    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '250px',
      data: task,
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){

        this.taskService.updateTask(result).subscribe(task => {
          if(task){
            this._snackBar.open(task.msg + " 🛷", 'Cerrar', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
            this.loadTask();
          }
        });

      }
      
    });
  }

  changeStatus(task:Data){

    this.taskService.updateStatusTask(task).subscribe(resp => {
      if(resp){
        this.mostrarSnakbar(resp.msg);
        this.loadTask();
      }
    })

  }

  OnPageChange( $event: PageEvent ){

    
    return $event;
  }
  

}
