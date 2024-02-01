import { Injectable } from '@angular/core';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TasksListService {
  public TasksList: Task[] = [];

  TaskUrl = 'http://localhost:3000/tasks';

  public searchValue: string = '';

  checkedTargetTask: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor() {}

  // getTasksList(): Task[] {
  //   return this.TasksList;
  // }

  async getTasksList(): Promise<Task[]> {
    const data = await fetch(this.TaskUrl);
    // this.TasksList = (await data.json()) ?? [];
    return (await data.json()) ?? [];
  }

  getSearchValue(): string {
    return this.searchValue;
  }

  handleTaskSearch(searchValue: string): void {
    console.log(searchValue);
    if (searchValue !== '') {
      this.TasksList = this.TasksList.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }

  handleCheck(targetId: number) {
    console.log(this.TasksList);

    this.TasksList = this.TasksList.map((task) =>
      task.id === targetId ? { ...task, completed: !task.completed } : task
    );
  }

  updateTask(id: number, newTask: Task) {
    // this.updateTargetIdx = this.TasksList.findIndex((task) => task.id === id);
    // this.TasksList[this.updateTargetIdx] = newTask;

    this.TasksList.map((task) => (task.id === id ? { task: newTask } : task));
  }
}
