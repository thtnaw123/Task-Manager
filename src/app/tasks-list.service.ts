import { Injectable } from '@angular/core';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TasksListService {
  public TasksList: Task[] = [
    {
      id: 22,
      title: 'work out',
      description: '3 hours in gym, jogging and aerobics',
    },  {
      id: 44,
      title: 'Cook Breakfast',
      description: 'for me and family use ingredients',
    },
  ];

  constructor() {}

  getTasksList(): Task[] {
    return this.TasksList;
  }
}
