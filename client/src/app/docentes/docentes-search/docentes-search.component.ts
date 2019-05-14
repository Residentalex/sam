import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../docentes.service';

@Component({
  selector: 'app-docentes-search',
  templateUrl: './docentes-search.component.html',
  styleUrls: ['./docentes-search.component.css']
})
export class DocentesSearchComponent implements OnInit {

  public lDocentes: object;

  constructor(
    private docentesService: DocentesService
  ) { }

  ngOnInit() {
    this.docentesService.getDocentes().subscribe(
      res => this.lDocentes = res,
      err => console.log(err)
    );
  }


}
