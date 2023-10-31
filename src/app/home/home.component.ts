import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:string="Shubham";
  constructor(private sh:SharedService) { }


  ngOnInit(): void {
  }
store(){
this.sh.nameShare.emit(this.name);
}
}
