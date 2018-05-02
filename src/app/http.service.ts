import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { HttpClient } from '@angular/common/http';
import { Alunoes } from './datastore/models/alunoes.model';

const config: DatastoreConfig = {
  models: {
    Alunoes: Alunoes
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: HttpClient) {
        super(http);
    }

}