import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';


@Component({
  selector: 'app-todo',
  template: `
   <input type = "checkbox" [checked] = "todo.done"><label>{{todo.text}}</label>
  
  `,
  styles: [`
    :host {
      display : block;
      padding : 16px;
      color : red;
      background-color : white;
    }

    input {
      position : releative;
    }

    input:before {
      content : "";
      display:inline-block;
      width : 20px;
      height : 20px;
      background-color : white;
      position : absolute;
      top : -6px;
      left : -6px;
      border : 1px solid darkgray;
    }

    input:checked:after{
      content : '\\2713';

    }
  `]
})

export class TodoComponent implements OnInit {
  @Input () 
  todo : Todo;
  constructor() { }

  ngOnInit() {
  }

}