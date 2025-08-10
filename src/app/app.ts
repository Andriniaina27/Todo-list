import { Component, signal } from '@angular/core';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports : [Todo]
})
export class App {
  protected readonly title = signal('todo-app');
}
