import { Component, inject } from '@angular/core';
import { Task } from '../../Task';
import { FormsModule } from '@angular/forms';
import { TasksListService } from '../tasks-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  tasks: Task[] = [];
  task: Task = { id: 0, title: '', description: '', completed: false };
  taskId: number = 0;

  public TaskService = inject(TasksListService);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // this.tasks = this.TaskService.getTasksList();
    this.TaskService.getTasksList().then(
      (tasks: Task[]) => (this.tasks = tasks)
    );
  }
  ngOnInit() {
    this.taskId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(typeof this.taskId, this.taskId);

    this.task = this.tasks.find((t) => t.id === this.taskId) || {
      id: 0,
      title: '',
      description: '',
      completed: false,
    };
    console.log(this.task);
  }

  //find the task and update it
  handleSubmit(id: number) {
    console.log(id);
    this.TaskService.updateTask(id, this.task);
    this.router.navigate(['/tasks']);
  }
}
