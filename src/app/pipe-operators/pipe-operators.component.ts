import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styleUrls: ['./pipe-operators.component.scss']
})
export class PipeOperatorsComponent implements OnInit {

  myObs=from("hello world")
  constructor() { }

  ngOnInit(): void {
    this.myObs
    .pipe
    (
      filter((char)=>char!==' '),
      map((char)=>char.toUpperCase())
    )
    .subscribe((val)=>console.log(val))
  }
}

