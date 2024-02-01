import { Component, inject } from '@angular/core';
import { TasksListService } from '../tasks-list.service';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../../Task';

@Component({
  selector: 'app-search-task',
  standalone: true,
  imports: [FormsModule, TaskListComponent],
  templateUrl: './search-task.component.html',
  styleUrl: './search-task.component.css',
})
export class SearchTaskComponent {
  public TaskListFromService = inject(TasksListService);
  filterdTaskList: Task[] = [];
  tasks: Task[] = [];

  constructor() {
    this.TaskListFromService.getTasksList().then((tasks: Task[]) => {
      this.tasks = tasks;
      this.filterdTaskList = this.tasks;
    });
    this;
  }

  filterResults(searchValue: string) {
    if (!searchValue) {
      this.filterdTaskList = this.tasks;
    } else {
      this.filterdTaskList = this.tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    console.log(this.filterdTaskList);
  }
}
