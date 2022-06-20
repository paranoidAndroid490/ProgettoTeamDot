import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Yacht } from '../shared/yacht.model';
import { YachtsService } from '../shared/yachts.service';

@Component({
  selector: 'app-yacht',
  templateUrl: './yacht.component.html',
  styleUrls: ['./yacht.component.css']
})
export class YachtComponent implements OnInit {

  yacht:Yacht

  constructor(private yachtsService: YachtsService,
    private ActRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.server = this.serverService.getServerById(1);
    // vado a prendere dinamicamente il mio id attraverso Activated Route
    const id = +this.ActRoute.snapshot.params['id'];

    //ATT: quando recupero qualcosa da un url recupero sempre string

    this.yacht = this.yachtsService.getYachtById(id);




    //l'id che sta arrivando è di tipo Observable -> mi serve il .subscribe()
    this.ActRoute.params
        .subscribe(
          (params: Params) =>{
            this.yacht = this.yachtsService.getYachtById(+params['id'])
          }
        );

  }
  onModYacht(){
    this.router.navigate(['edit/'+this.yacht.id],{relativeTo:this.ActRoute})
  }

}
