import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

// anhular can use this class in the DI system.


export class UtilityService {

 private sayHello( ){
          console.log("Hello from utility service");
  }

  useHello(){
    this.sayHello();
  }
  constructor() { 
    console.log("Hello from Parent constructor ");
    console.log(new Date());
  }
}
export class AbhiService extends UtilityService{
  constructor(){
    super();
    console.log('Hello from TimeService constructor')
  }
  public datefromChild() {
    console.log("from")
  }

}
