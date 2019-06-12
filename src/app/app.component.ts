import { Component } from '@angular/core';
import { TestService } from "./services/test.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  details:any;
  constructor(private testService:TestService) { }

  nam:any =
  {
    name: "test",
    Phno: 99999,
    email: "test@test.com"
  }

   list2: { name: string, phno: number, email:string }[] = [
    { name: "sid1", phno: 321424213, email: "t1@gg" },
    { name: "sid2", phno: 321424213, email: "t2@gg" },
    { name: "sid3", phno: 321424213, email: "t2@gg" }
];

  list:any = ["Name: sid Phno: 8789898097 Email: t1@gg",
  "Name: Harendra Phno: 7789898097 Email: t2@gg",
  "Name: Raj Phno: 922898097 Email: t3@gg"
]
  

  
ngOnInit() {
  this.testService.addName(this.nam)
  .subscribe((names) => {
    console.log(names)
  }
  )};

}
