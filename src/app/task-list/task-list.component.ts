import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';
import { stat } from 'fs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public task_list: Task[] = new Array();

  constructor() { 
    this.addTask(1,"09/09/09","hello world");
    this.addTask(2,"09/09/09","hello world");
    this.addTask(3,"09/09/09","hello world");
  }

  sortTaskList(): void {
    this.task_list.sort(function(a,b) {return a.priority - b.priority});
  }

  addTask(pr: number, due_date: string, desc: string): void {
    this.task_list.push(new Task(pr,due_date,desc));
  }

  refreshTaskList(): Task[] {
    this.sortTaskList();
    return this.task_list;
  }

  ngOnInit(): void {
  }

}

export class Task {
  priority: number;
  due_date: string;
  description: number;

  constructor(pr: number, due_date: string, desc: string) {
    this.priority = pr;
    this.description = desc;
    this.due = due_date;
  }
  
  setPriority(prior_str: string): void {
    this.priority = prior_str;
  }

  setDesc(desc_str: string): void {
    this.description = desc_str;
  }

  setDue(due_str: string): void {
    this.due = due_str;
  }

  getPriority(): string {
    return this.priority;
  }

  getDesc(): string {
    return this.description;
  }

  getDue(): string {
    return this.due;
  }
}
