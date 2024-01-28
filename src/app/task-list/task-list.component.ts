import { Component, inject, Input } from '@angular/core';
import { UnitTaskComponent } from '../unit-task/unit-task.component';
import { Task } from '../../Task';
import { TasksListService } from '../tasks-list.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [UnitTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  task: Task = { id: 0, title: '', description: '' };
  @Input() tasks: Task[] = [];
  targetValue: any = {};
  idx: number = 0;

  public TaskListFromService = inject(TasksListService);

  // constructor(private taskListFromService: TasksListService) {
  //   this.tasks = this.taskListFromService.getTasksList();

  // }
  constructor() {
    this.tasks = this.TaskListFromService.getTasksList();
  }

  handleDeleteTask(id: string) {
    this.targetValue = this.tasks.find((t) => t.id === parseInt(id));
    if (this.targetValue) {
      this.idx = this.tasks.indexOf(this.targetValue);
    }
    console.log(id);
    this.tasks.splice(this.idx, 1);
  }
}
