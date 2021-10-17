import { JsonPipe } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../type-todo'
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  todo: Todo[] = [];

  public inputTodo:string = '';

  getData:any = localStorage.getItem('todo');

  constructor() {
  console.log(this.todo);
  
  }

  ngOnInit(): void {
    this.todo = [
      {
        content: JSON.parse(this.getData),
        complete: false,
      }
    ]
}


  toggleDone(id:number){
    this.todo.map((v,i)=>{
      if(i == id)v.complete = !v.complete;
    })
  }

  removeEl(id:number){
    this.todo = this.todo.filter((v,i)=> i !==id);
  }

  addTodo(){
    if(this.inputTodo !== ''){
    this.todo.push({
      content: this.inputTodo,
      complete: false
    });
    this.inputTodo = '';
    console.log(this.todo);
    
    localStorage.setItem('todo',JSON.stringify(this.todo));
  }
}
}
