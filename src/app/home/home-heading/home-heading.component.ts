import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-heading',
  templateUrl: './home-heading.component.html',
  styleUrls: ['./home-heading.component.css']
})
export class HomeHeadingComponent implements OnInit {
@Input() naav:any;
  constructor() { }

  ngOnInit(): void {
  }

}
