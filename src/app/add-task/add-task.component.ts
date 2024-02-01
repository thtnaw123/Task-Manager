import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { TasksListService } from '../tasks-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  task: Task = { id: 0, title: '', description: '', completed: false };
  tasks: Task[] = [];
  errorMessage: string = '';

  constructor(
    private taskListFromService: TasksListService,
    private router: Router
  ) {
    this.taskListFromService
      .getTasksList()
      .then((tasks: Task[]) => (this.tasks = tasks));
  }

  handleSubmit() {
    // console.log(this.tasks);
    if (this.task) {
      if (this.task.title !== '' && this.task.description !== '') {
        this.tasks.push(this.task);
        this.router.navigate(['/tasks']);
        this.task = {
          id: this.tasks.length + 1,
          title: '',
          description: '',
          completed: false,
        };
        this.errorMessage = '';
      } else {
        this.errorMessage = '*All fields should be filled';
      }
    }
  }
}
