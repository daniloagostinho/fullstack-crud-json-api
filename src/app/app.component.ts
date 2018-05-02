import { HttpService } from './http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  alunos;

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.httpService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);

    console.log(this.alunos);
  }
}
