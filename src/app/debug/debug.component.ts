import { Component, OnInit } from '@angular/core';
import { DebugserviceService } from '../debugservice.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {


  constructor(private debugserviceService:DebugserviceService) { }

  ngOnInit(): void {
    this.debugserviceService.info("debug component is created service from the parent")
  }

}
