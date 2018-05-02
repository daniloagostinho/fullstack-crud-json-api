import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  configUrl = 'http://localhost:50568/api/Alunoes';

  getAlunos() {
    return this.http.get(this.configUrl);
  }

  constructor(private http: HttpClient) { }

}
