import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../docentes.service';
import { Docentes } from '../docentes';

@Component({
  selector: 'app-docentes-search',
  templateUrl: './docentes-search.component.html',
  styleUrls: ['./docentes-search.component.css']
})
export class DocentesSearchComponent implements OnInit {

  listDocentes: any = [];

  constructor(
    private docenteService: DocentesService
  ) { }

  ngOnInit() {
    this.docenteService.getDocentes().subscribe(
      res => this.listDocentes = res,
      err => console.log(err)
    );
  }

}
