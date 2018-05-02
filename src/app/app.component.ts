import { Component } from '@angular/core';
import { Datastore } from './http.service';
import { Alunoes } from './datastore/models/alunoes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  alunos;

  constructor(private datastore: Datastore) {

  }

  ngOnInit() {
    this.datastore.findAll(Alunoes).subscribe(resultado => {
      this.alunos = resultado;
      // this.responsibleList = [{
      //   'responsible_name': unitSelected.responsible_name,
      //   'responsible_email': unitSelected.responsible_email
      // }];
    });
  }

}
