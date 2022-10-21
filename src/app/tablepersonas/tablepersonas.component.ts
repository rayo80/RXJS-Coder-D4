import { Component, OnInit, ViewChild } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';
import { MatTable } from '@angular/material/table';
import { PersonaSchema } from '../services/persona.interface'
import { delay, filter, from, fromEvent, interval, map, Observable, of, Subscription } from 'rxjs';

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
  
  myObs2$ = new Observable<PersonaSchema>();
  myObs3$: Observable<PersonaSchema>;
  source$: Observable<PersonaSchema[]>;
  personas: PersonaSchema[];
  supscripcion1: Subscription;
  valores$ = interval(1000)

  ngOnInit(): void {
    // obtenemos la lista
    this.source$ = this.miService.returnlist();

    //se pasa toda la lista (no hay desusc)
    this.source$
    .subscribe((val)=>this.personas = val)
  

    this.supscripcion1 = this.source$
    .subscribe({
        next: (val)=>(this.personas = val),
        complete: () => this.asign(),
     })
  }
 
  asign(){
    this.myObs3$ = from(this.personas).pipe(delay(4000))
  }


  filtrar1(){
    this.myObs2$
    .pipe(
      filter(val => val.age<32),
      map(val => val.name)
    )
    .subscribe(
      val=>alert(val)
    )
  }

  filtrar2(){
    this.myObs2$
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
