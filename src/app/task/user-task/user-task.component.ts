import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [CardComponent],
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
