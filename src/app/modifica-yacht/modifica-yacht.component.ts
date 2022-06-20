import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Yacht } from '../shared/yacht.model';
import { YachtsService } from '../shared/yachts.service';

@Component({
  selector: 'app-modifica-yacht',
  templateUrl: './modifica-yacht.component.html',
  styleUrls: ['./modifica-yacht.component.css']
})
export class ModificaYachtComponent implements OnInit {


  constructor(private yachtsService: YachtsService,
    private ActRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {

  }

}
