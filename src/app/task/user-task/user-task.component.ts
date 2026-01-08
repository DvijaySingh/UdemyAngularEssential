import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {

  @Input({required:true}) task!: Task ;

  private taskService= inject(TaskService);
  onCompleteTask(){
   this.taskService.removeTask(this.task.id);
  }

}
