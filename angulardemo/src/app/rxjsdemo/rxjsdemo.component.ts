import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjsdemo',
  standalone: true,
  imports: [],
  templateUrl: './rxjsdemo.component.html',
  styleUrl: './rxjsdemo.component.css'
})
export class RxjsdemoComponent {

  // test1= of(1,2,3,4,5);
  // constructor() {
  //   this.test1.subscribe(
  //     data => console.log(data),
  //     err => console.log(err),
  //     ()=> console.log('completed')

  //   );
  // }

  constructor() {
    this.demo();
    this.demo2();
    this.demo4();
    this.demo5();
  }
 
  demo() {
    const observable = new Observable((observer) => {
      observer.next('channel 1');
      observer.next('channel 2');
      observer.next('channel 3');
      observer.next('mahabaharat');
      observer.complete();
    });
 
    observable.subscribe({
      next: (x) => console.log('got a value ' + x),
      error: (err) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }
 


  demo2 ()
  {  //create a observable which will display numbers from 1 to 10
 
    const numbersObservable = new Observable(
      subscriber => {
        for (let i = 1; i <= 10; i++) {
          subscriber.next(i);
        }
        subscriber.complete();
      }
    );
 
    numbersObservable.subscribe( {
      next(value){
        console.log(value);
      },
      complete(){
        console.log('completed');}
 
    }
 
 
    );
  }
  demo3() 
  {
    // create a observable for https://jsonplaceholder.typicode.com/todos
    // private url ='https://jsonplaceholder.typicode.com/todos'
    
    
  }

  demo4()
  // Even numbers.
  {
    const evenNumbers = new Observable<number>((observer) => {
        for (let i=1;i<=10;i++) {
        if(i % 2 === 0){
          observer.next();
        }

        }
        observer.complete();
      });
     

  
  }
  
  // evenNumbers.subscribe((evenNumber: any) => {
  //   console.log(evenNumber);
    
  // });


demo5()
{
  const message = new Observable<string>((observer) => {
    observer.next('Welcome to Angular project');
    observer.complete();
  });
  message.subscribe((message)=> {
    console.log(message);
  });
}
  



}


