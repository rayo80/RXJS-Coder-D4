import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProgramacionReactivaVilla';
  user = new Usuario('Pepito')
  ngOnInit(): void {
    /*
    this.user.obtenerUsuarios()
    .then(usuarios => console.log(usuarios))
    .catch(err => console.error(err));*/

    /*
    this.user.otroUsuarios().subscribe({
      next: (val)=>console.log(val),
      error: (error)=>console.log(error)
    })
    */
   
    /*
    let subject = new Subject();
    let click$ = fromEvent(document, 'click');
    subject.subscribe(
      (val:any)=>console.log('valor emitido por el click desde el primer subject' + val.type),
    )
    subject.subscribe(
      (val:any)=>console.log('valor emitido por el click desde el segundo subject' + val.type),
    )

    click$.subscribe(subject);
    */
  }

}
