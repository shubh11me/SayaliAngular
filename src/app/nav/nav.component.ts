import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private sh:SharedService) { }
name="";
  ngOnInit(): void {
    this.sh.nameShare.subscribe((r)=>{
this.name=r;
    },(e)=>{

    })
  }

}
