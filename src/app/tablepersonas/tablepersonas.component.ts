import { Component, OnInit, ViewChild } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';
import { MatTable } from '@angular/material/table';
import { PersonaSchema } from './persona.interface'
import { filter, fromEvent, map, Observable, of } from 'rxjs';

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
  personas=[];
  ngOnInit(): void {
    this.source = this.miService.retornar();
    this.source
    .subscribe((val)=>this.personas = val)
  }

  filtrar1(){
    /*esto no me funciona
    this.source
    .pipe(
      filter(val => val.age<32)
    )
    .subscribe(
      val=>console.log(val)
    )*/
      /*.pipe
    (
      filter((val)=>val.name!=='Juan'),
      map((val)=>console.log(val.name))
    )*/
  }
  
}
