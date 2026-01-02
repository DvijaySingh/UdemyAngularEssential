import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';
import { NewTaskComponent } from "./new-task/new-task.component";



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
@Input({required: true}) id?: string;
isAddingTask = false;
@Output() AddNewTask = new EventEmitter();
tasks=[
   {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]

get selectedUserTasks(){
  return this.tasks.filter((task)=>task.userId===this.id);
}

onCompleteTask(id:string){

  this.tasks= this.tasks.filter((task)=>task.id!==id);
}

onAddNewTask(){
  this.isAddingTask=true;
  this.AddNewTask.emit();
}

onCancelTask(){
  this.isAddingTask =false;
}
}
