import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos', //element이름 , . # 사용가능 
  templateUrl: './todos.component.html', //뷰에 대한 정의
  styleUrls: ['./todos.component.css'] //여러 스타일의 url을 가질 수 있음
}) //일종의 함수

export class TodosComponent implements OnInit {

  newText = "";
  todos:Todo[];
  today : Date = new Date();

  constructor() {
    this.todos = [
      {done : false, text : '운동하기'},
      {done : true, text : '운동하기'}
    ];
   }

  ngOnInit() {
  }

  todoTogle(todo) {
    todo.done = !todo.done
  }

  addTodo(text:string){
    this.todos.push({
      done:false,
      text:text
    });
  }

  
}
