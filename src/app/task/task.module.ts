import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskRoutingModule } from './task-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { NewTaskComponent } from './components/newTask/newTask.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ListComponent,
    NewTaskComponent,
    EditTaskComponent
  ],
  imports: [
    TaskRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    MatPaginatorModule
  ],
})
export class TaskModule { }
