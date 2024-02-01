import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';

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
    component: SearchTaskComponent,
  },
  {
    path: 'tasks/:id',
    title: 'Task Details',
    component: EditTaskComponent,
  },
];
