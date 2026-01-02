import { Component , computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//     id: string;
//     avatar: string;
//     name: string;
// }


// const randomIndex= Math.floor(Math.random()* DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar);



  // old approch 
  // @Input({required:true}) id!:string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required:true}) user! : User;
  @Input({required:true}) selected!: boolean;
  @Output() Select = new EventEmitter<string>();
  
 get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }

  

  // new approch with signals
    // id =input.required<string>()
    // avatar= input.required<string>();
    // name = input.required<string>();
    // Select =output<string>();
    // imagePath= computed(()=>{
    //   return 'assets/users/'+ this.avatar();
    // })
    
  onClickUser(){
    // const randomIndex= Math.floor(Math.random()* DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

    this.Select.emit(this.user.id);
  }
}
