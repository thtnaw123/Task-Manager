import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../Task';

@Component({
  selector: 'app-unit-task',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './unit-task.component.html',
  styleUrl: './unit-task.component.css',
})
export class UnitTaskComponent {
  @Input() task: Task = { id: 0, title: '', description: '' };
  @Output() deleteEvent = new EventEmitter<string>();

  dropDescription: boolean = false;
  handleExpand() {
    this.dropDescription = !this.dropDescription;
  }

  handleDelete() {
    this.deleteEvent.emit(this.task.id as unknown as string);
  }
}
