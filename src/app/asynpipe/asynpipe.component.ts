import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-asynpipe',
  templateUrl: './asynpipe.component.html',
  styleUrls: ['./asynpipe.component.scss']
})
export class AsynpipeComponent implements OnInit {
  asyncPromise: Promise<string>
  asyncObservable: Observable<string>
  constructor() { }

  ngOnInit(): void {
    this.asyncPromise = this.conPromise('Valor de la promesa');
    this.asyncObservable = this.conObservable('Valor del observable');
  }

  conPromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 2000);
    })
  }
  
  conObservable(value: string): Observable<string> {
    return of(value).pipe(delay(2000));
  }

}
