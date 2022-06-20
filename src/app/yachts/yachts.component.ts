import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yacht } from '../shared/yacht.model';
import { YachtsService } from '../shared/yachts.service';

@Component({
  selector: 'app-yachts',
  templateUrl: './yachts.component.html',
  styleUrls: ['./yachts.component.css']
})

export class YachtsComponent implements OnInit {

  barche: Yacht[] = []

  constructor(private yachtsService:YachtsService,private router: Router) { }

  ngOnInit(): void {
    this.yachtsService.getData().subscribe(res=>{
      for(let i in res){
        let yacht = new Yacht(res[i].id,res[i].nome,res[i].descrizione,res[i].costoGiorn,res[i].inOfferta,res[i].imgUrl)
        this.barche.push(yacht)
      }
      this.yachtsService.getYachtList(this.barche)
    })
  }

  onModYacht(id:number){
    this.router.navigate(['modifica/yacht/'+id])

  }

}


