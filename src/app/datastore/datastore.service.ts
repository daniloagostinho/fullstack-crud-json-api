import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alunoes } from './models/alunoes.model';

@Injectable()
@JsonApiDatastoreConfig({
  models: {
    alunoes: Alunoes
  }
})
export class Datastore extends JsonApiDatastore {
  constructor(http: HttpClient) {
    super(http);
  }
}
