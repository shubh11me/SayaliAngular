import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private sh:SharedService) { }
  givenName:any="";
  name:any="";
  store(){
    this.sh.nameShare.emit(this.name);
    }
  ngOnInit(): void {
    this.givenName=JSON.stringify(localStorage.getItem("name"));
  }

}
