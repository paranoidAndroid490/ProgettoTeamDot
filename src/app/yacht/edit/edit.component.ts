import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { YachtsService } from 'src/app/shared/yachts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectStatus = [true,false]
  isOfferta = this.selectStatus[0]


  // barca = {
  //   nomeBarca: '',
  //   descBarca: '',
  //   prezzoBarca: '',
  //   inOfferta: false,
  //   image:''

  // }

  constructor(private yachtsService:YachtsService,private ActRoute: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form)
    const id = +this.ActRoute.snapshot.params['id'];
    let yacht = this.yachtsService.getYachtById(id)
    yacht.modificaYacht(form.value.nome,form.value.desc,form.value.prezzo,form.value.inOfferta,form.value.image)
    this.yachtsService.putData(yacht)

    // this.barca.nomeBarca = form.value.nomeInput
    // this.barca.descBarca = form.value.nomeText
    // this.barca.prezzoBarca = form.value.prezzoBarca
    // this.barca.inOfferta = form.value.inOfferta
    // this.barca.image = form.value.img
    }
}
