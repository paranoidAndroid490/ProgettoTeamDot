export class Yacht {
  id:number
  nome:string;
  descrizione:string;
  costoGiorn:number;
  inOfferta:boolean;
  img:string;

  constructor(id:number,nome:string,descrizione:string,costoGiorn:number,inOfferta:boolean,img:string){
this.id = id;
this.nome = nome;
this.descrizione = descrizione
this.costoGiorn = costoGiorn
this.inOfferta = inOfferta;
this.img = img
  }

  modificaYacht(nome?:string,descrizione?:string,costoGiorn?:number,inOfferta?:boolean){}

}
