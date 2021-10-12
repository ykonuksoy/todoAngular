import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }
 
    private name: string = "Yami";
    // items = [
    //   "item 1","item 2","item 3"
    // ];
    items: TodoItem[] = [
      // new TodoItem("kahvaltı", "yes"),
      // new TodoItem("spor", "yes"),
      // new TodoItem("alışveriş", "no")
      {description: "kahvaltı", action: "yes"},
      {description: "spor", action: "yes"},
      {description: "alışveriş", action: "no"},
    ]

    getName(){
      return this.name;
    }

}
