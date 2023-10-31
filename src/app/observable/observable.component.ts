import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private sh:SharedService) { }

  ngOnInit(): void {

    this.sh.myObs
//     .pipe(map((e)=>{
// return "I am "+e;
//     }))
.pipe(take(2))
    .subscribe((r)=>{
      console.log(r)
    })
  }

}
