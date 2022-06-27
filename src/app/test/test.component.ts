import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable, Observer } from 'rxjs';
import { DebugserviceService } from '../debugservice.service';
import { Router, ActivatedRoute } from '@angular/router'; 



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  viewProviders: [DebugserviceService] 
})

export class TestComponent implements OnInit {


  userName = "peter";
  myCssClass = "red";
  myapplyCssClass = "false";
  myParaColor = "brown";
  users: User[] = [{ "userId": 1, "userName": 'User1' },
  { "userId": 2, "userName": 'User2' }];
  fruits = ["apple", "banana", "orange", "kiwi", "berries"];
  name: string = "ruchitha";
  digits: number = 100;
  presentDate = new Date();
  timeChange = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  jsonData = { id: 'one', name: { username: 'user1' } };
  title: string | undefined;
  test: TestComponent[] | undefined;

  constructor(private debugserviceService: DebugserviceService,private router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.userName = "Praveen";
    this.debugserviceService.info("Angular application starts");
    this.debugserviceService.info("test component initialized"); 
    this.title = "test component";
    this.test = this.getTest();
  }
  getTest(): any[] | undefined {
    throw new Error('Method not implemented.');
  }
  Test(): any[] | undefined {
    throw new Error('Method not implemented.');
  }

  appName = "my first app";
  showData($event: any) {
    console.log("button is clicked!"); if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }

  }



}
