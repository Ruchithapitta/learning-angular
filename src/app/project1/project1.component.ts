import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component implements OnInit {
  title="string";
  isLogOut="true";
  isLogIn="false";
  list=[1,2,3,4,5];
  studentArr:any[]=[
    {"id":1,"name":"student1"},
    {"id":2,"name":"student2"},
    {"id":3,"name":"student3"},
    {"id":4,"name":"student4"},
  ];
  trackByData(index:number,studentArr:any){
    return studentArr.id;
  }
  LogInName='admin';

  constructor(private router: Router, private route: ActivatedRoute) 
    { }

  ngOnInit(): void {
    this.title="project1";
  }

}
