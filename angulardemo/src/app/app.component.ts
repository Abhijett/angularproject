import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbhiService, UtilityService } from './utility.service';
import { AddNumbers} from './message.decorator';
import { JsonreaderComponent } from './jsonreader/jsonreader.component';
import { RxjsdemoComponent } from './rxjsdemo/rxjsdemo.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
@Component({ providers: [AbhiService,UtilityService],
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,JsonreaderComponent,RxjsdemoComponent,LoginComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@AddNumbers(20,50)
export class AppComponent {
sum:number | undefined ;
onClick() {
throw new Error('Method not implemented.');
}
  title = 'property demo';
  str = 'Hello World'
  currentDate = new Date();
family = ["Rahul","Raj","Ravi","Rohit"];


// this.inputOne = Number(event.target.value); 
// }


// onInputTwoChange(event: any) {
//   this.inputTwo = Number(event.target.value); 
// }


// addNumbers() {
//   this.result = this.inputOne + this.inputTwo;
  

constructor (private obj:AbhiService){
  // // let obj = new UtilityService();
  // obj.useHello();
  // vararr_name:number[]= new Array (4)

}
public useChild() {

}





}


