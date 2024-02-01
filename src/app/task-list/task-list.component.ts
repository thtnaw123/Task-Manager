import { Component, inject, Input } from '@angular/core';
import { UnitTaskComponent } from '../unit-task/unit-task.component';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [UnitTaskComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() filterdTaskList: Task[] = [];
  targetValue: any = {};
  idx: number = 0;
  // constructor(private taskListFromService: TasksListService) {
  //   this.tasks = this.taskListFromService.getTasksList();
  // }

  handleDeleteTask(id: string) {
    this.targetValue = this.filterdTaskList.find((t) => t.id === parseInt(id));
    if (this.targetValue) {
      this.idx = this.filterdTaskList.indexOf(this.targetValue);
    }
    console.log(id);
    this.filterdTaskList.splice(this.idx, 1);
  }
}
