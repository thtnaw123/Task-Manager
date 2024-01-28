import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { TaskListComponent } from '../task-list/task-list.component';
import { TasksListService } from '../tasks-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, TaskListComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  task: Task = { id: 0, title: '', description: '' };
  tasks: Task[] = [];

  constructor(
    private taskListFromService: TasksListService,
    private router: Router
  ) {
    this.tasks = this.taskListFromService.getTasksList();
  }

  handleSubmit() {
    console.log(this.tasks);
    if (this.task) {
      this.tasks.push(this.task);
      this.router.navigate(['/tasks']);
      this.task = { id: this.tasks.length + 1, title: '', description: '' };
    }
  }

  // handleDeleteTask(id: string) {
  //   this.targetValue = this.tasks.find((t) => t.id === parseInt(id));
  //   if (this.targetValue) {
  //     this.idx = this.tasks.indexOf(this.targetValue);
  //   }
  //   console.log(id);
  //   this.tasks.splice(this.idx, 1);
  // }
}
