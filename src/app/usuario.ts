import { fromEvent, Observable, of, Subject, throwError } from "rxjs";

export class Usuario {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    obtenerUsuarios(){
        return new Promise((resolve,reject)=>{
            if(this.name){
              return resolve([{name:'username1'}]);
            }
            return reject({message: 'error'});
          })
        }     
    
    otroUsuarios(): Observable<any>{
        if(this.name){
            return of([{username:this.name}])
        }else{
            return throwError(()=> new Error('ERROR 404'));
        }
    }
}
