import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../Task';
import { RouterLink } from '@angular/router';
import { TasksListService } from '../tasks-list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-task',
  standalone: true,
  imports: [MatIconModule, RouterLink, FormsModule],
  templateUrl: './unit-task.component.html',
  styleUrl: './unit-task.component.css',
})
export class UnitTaskComponent {
  @Input() task: Task = { id: 0, title: '', description: '', completed: false };
  @Output() deleteEvent = new EventEmitter<string>();

  public TaskListFromService = inject(TasksListService);

  dropDescription: boolean = false;
  handleExpand() {
    this.dropDescription = !this.dropDescription;
  }

  handleDelete() {
    this.deleteEvent.emit(this.task.id as unknown as string);
  }
}
