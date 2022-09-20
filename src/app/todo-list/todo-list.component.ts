import { Component, OnInit } from '@angular/core';
import { Tasks } from '../new-task/Tasks';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: Array<Tasks> = [];

  constructor() {
    if (localStorage.getItem('tasks')) {
      let dummy = JSON.parse(localStorage['tasks']);
      this.tasks = [...dummy];
      console.log(this.tasks[0]?.date);
    }
  }

  delete(index: number) {
    this.tasks.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  markCompleted(index: number) {
    this.tasks[index].isCompleted = true;
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  ngOnInit(): void {}
}
