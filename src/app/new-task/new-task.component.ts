import { Component, OnInit, NgModule } from '@angular/core';
import { Tasks } from './Tasks';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  tasks: Array<Tasks> = [];

  constructor() {
    if (localStorage.getItem('tasks')) {
      let dummy = JSON.parse(localStorage['tasks']);
      this.tasks = [...dummy];
      console.log(this.tasks[0]?.date);
    }
  }

  newTask(task: any) {
    console.log(task);
    const newTask: {
      name: String;
      date: Date;
      completeBy: Date;
      description: String;
      isCompleted: boolean;
    } = {
      name: task.name,
      date: new Date(),
      completeBy: task.dateOfCompletion,
      description: task.description,
      isCompleted: false,
    };
    let check = this.tasks.filter((ele) => ele.name === newTask.name);
    console.log(check);
    if (check.length === 0) {
      this.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      console.log(this.tasks);
      window.location.reload();
    } else {
      console.log('Already present');
    }
  }

  ngOnInit(): void {}
}
