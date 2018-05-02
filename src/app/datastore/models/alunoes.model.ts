import {
  JsonApiModelConfig,
  JsonApiModel,
  Attribute
} from 'angular2-jsonapi';


@JsonApiModelConfig({
  type: 'Alunoes',
  baseUrl: 'http://localhost:50568/api'
})

export class Alunoes extends JsonApiModel  {

  @Attribute()
  alunosId: number;

  @Attribute()
  profile_goals_value: number;


  @Attribute()
  nome: string;

  @Attribute()
  final_date: string;

  @Attribute()
  senha: number;

  getKey(): string {
    return 'alunos';
  }
}
