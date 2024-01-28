import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'addTask',
    title: 'Add Task',
    component: AddTaskComponent,
  },
  {
    path: 'tasks',
    title: 'Task List',
    component: TaskListComponent,
  },
];
