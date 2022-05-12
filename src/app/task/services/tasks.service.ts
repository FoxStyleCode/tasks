import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Task, Data, Data2 } from '../interfaces/tasks.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task>{
    return this.http.get<Task>(`${this.baseUrl}/tasks`);
  }

  saveTask( task:string ):Observable<Data2>{
    return this.http.post<Data2>(`${this.baseUrl}/tasks`, { name: task });
  }

  deleteTask( task_id: Data ):Observable<Data2>{
    return this.http.delete<Data2>(`${this.baseUrl}/tasks/${task_id.id}`);
  }

  updateTask( task: Data ):Observable<Data2>{
    return this.http.put<Data2>(`${this.baseUrl}/tasks/${task.id}`, { name: task.name });
  }

  updateStatusTask( task: Data ):Observable<Data2>{
    return this.http.get<Data2>(`${this.baseUrl}/update/task/${task.id}`);
  }

}
