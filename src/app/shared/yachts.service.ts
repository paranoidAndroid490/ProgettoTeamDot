import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Yacht } from './yacht.model';

@Injectable({
  providedIn: 'root'
})
export class YachtsService {

  yachts: Yacht[] = []

  constructor(private http:HttpClient) { }

  url= 'http://localhost:3000'
  getData(){
    return this.http.get(this.url+'/yachts')
  }

  putData(yacht){
    this.http.put(this.url+'/yachts/'+yacht.id, yacht)
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

  getYachtList(yachtList:Yacht[]){
    this.yachts = yachtList
  }

  getYachtById(id: number){
    const yacht = this.yachts.find(
      (y) => {
        return y.id === id
      }
      )

    return yacht;
  }

}
