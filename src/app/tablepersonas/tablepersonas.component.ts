import { Component, OnInit, ViewChild } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';
import { MatTable } from '@angular/material/table';
import { PersonaSchema } from '../services/persona.interface'
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-tablepersonas',
  templateUrl: './tablepersonas.component.html',
  styleUrls: ['./tablepersonas.component.scss']
})
export class TablepersonasComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<PersonaSchema>;

  constructor(private miService:MiservicioService) { }

  displayedColumns: string[] = ['id', 'name', 'lastname', 'age', 'casado'];
  
  
  source :Observable<any>;
  personas : PersonaSchema[];

  ngOnInit(): void {
    this.source = this.miService.returnall();
    this.source
    .subscribe((val)=>this.personas = val)
    this.myObs2=from(this.personas)
  }

  myObs2= new Observable<PersonaSchema>();
  filtrar1(){
    this.myObs2
    .pipe(
      filter(val => val.age<32),
      map(val => val.name)
    )
    .subscribe(
      val=>console.log(val)
    )
  }

  filtrar2(){
    this.myObs2
    .pipe(
      filter(val => val.age<40),
      map(val => val.name)
    )
    .subscribe(
      val=>console.log(val)
    )
  }


  
}
