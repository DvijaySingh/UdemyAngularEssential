import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card/shared.module";
import { TaskModule } from "./task/task.module";

@NgModule({
    declarations:[
        AppComponent, 
        HeaderComponent, 
        UserComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule, SharedModule, TaskModule ]
})
export class AppModule{

}