import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YachtsService {


  constructor(private http:HttpClient) { }

  url= 'http://localhost:3000'
  getData(){
    return this.http.get(this.url+'/yachts')
  }

  // creaUtente(email:string,statoCorso:string,nomeCorso:string){
  //   const postUtente = new Utente(email,statoCorso,nomeCorso)

  //   this.http.post(this.url+'/users.json',
  //   postUtente).subscribe(req => {
  //     console.log(req)
  //   })
  // }

  // fetchUtenti(){
  //   return this.http.get(this.url+'/users.json').pipe(map(res => {
  //     const mieiUtentiArray:Utente[] = []
  //     for(let key in res){
  //       // mieiUtentiArray.push(res[key])
  //       if(res.hasOwnProperty(key)){
  //         mieiUtentiArray.push({...res[key],id:key})
  //       }
  //     }
  //     return mieiUtentiArray
  //   }))
  // }
}
