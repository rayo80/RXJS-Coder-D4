import { Component, OnInit, ViewChild } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';
import { MatTable } from '@angular/material/table';
import { PersonaSchema } from '../services/persona.interface'
import { filter, from, fromEvent, map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-tablepersonas',
  templateUrl: './tablepersonas.component.html',
  styleUrls: ['./tablepersonas.component.scss']
})
export class TablepersonasComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<PersonaSchema>;
  panelOpenState = false;
  constructor(private miService:MiservicioService) { }

  displayedColumns: string[] = ['id', 'name', 'lastname', 'age', 'casado'];
  
  
  source: Observable<any>;
  personas: PersonaSchema[];
  supscripcion1: Subscription;

  ngOnInit(): void {
    this.source = this.miService.returnall();

    this.source
    .subscribe((val)=>this.personas = val)
  
    this.myObs2=from(this.personas)

    this.supscripcion1=this.source
    .subscribe((val)=>this.personas = val)
  }

  myObs2= new Observable<PersonaSchema>();
  filtrar1(){
    this.myObs2
    .pipe(
      filter(val => val.age<32),
      map(val => val.name)
    )
    .subscribe(
      val=>alert(val)
    )
  }

  filtrar2(){
    this.myObs2
    .pipe(
      filter(val => val.age<40),
      map(val => val.name)
    )
    .subscribe(
      val=>alert(val)
    )
  }


  ngOnDestroy(): void {
    this.supscripcion1.unsubscribe();
  }

  
}
