import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
   imports: [UserTaskComponent, NewTaskComponent]
})
export class TaskComponent {
//@Input({required:true}) name! : string;
// @Input() name : string | undefined;
@Input() name? : string;
@Input({required: true}) userId!: string;
isAddingTask = false;
constructor(private taskService: TaskService){

}


get selectedUserTasks(){
  return this.taskService.getUserTask(this.userId)
}



  onAddNewTask(){
    this.isAddingTask=true;
  }

  onCloseTask(){
    this.isAddingTask =false;
  }
  
}
