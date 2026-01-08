import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { UserTaskComponent } from "./user-task/user-task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CommonModule, DatePipe } from "@angular/common";
import { SharedModule } from "../shared/card/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TaskComponent, UserTaskComponent, NewTaskComponent],
    exports:[TaskComponent],
    imports:[SharedModule, CommonModule, FormsModule, DatePipe]
})
export class TaskModule{

}