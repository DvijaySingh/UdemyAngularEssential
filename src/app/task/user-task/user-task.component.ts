import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {

  @Input({required:true}) task!: Task 
  @Output()complete =new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
