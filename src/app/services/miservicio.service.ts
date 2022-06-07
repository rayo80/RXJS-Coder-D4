import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  personaslist =[
    {
      name: 'Juan',
      lastname : "gyarados",
      age: 30,
      married: true,
    },
    {
      name: 'Ermenegildo',
      lastname : "Otros",
      age: 30,
      married: false,

    },
    {
      name: 'Zacarias',
      lastname : "Perez",
      age: 37,
      married: true,
    },
    {
      name: 'Hector',
      lastname : "Garcia",
      age: 40,
      married: true,
    },
    {
      name: 'Hector',
      lastname : "Rodriguez",
      age: 45,
      married: false,
    },
    {
      name: 'Hector',
      lastname : "Uribe",
      age: 50,
      married: true,
    },
  ]
  constructor() { }
  retornar():Observable<any>{
    return of(this.personaslist)
  }
}
