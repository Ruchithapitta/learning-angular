import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  title : string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.title="Entry";
  }

}
