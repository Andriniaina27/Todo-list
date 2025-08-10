import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  standalone: true,
  host: { ngSkipHydration: 'true' }
})
export class Todo {
  newTask : string = '';
  tasks: { text: string; done: boolean }[] = [];
  ajoutTache(){
    const taskText = this.newTask.trim();
    if (taskText) {
      this.tasks.push({ text: taskText, done: false });
      this.newTask = '';
    }
  }

  supprTache(index : number){
    this.tasks.splice(index, 1)
  }

  tacheFait(task: {text : string; done: boolean}){
    task.done = !task.done;
  }
}
