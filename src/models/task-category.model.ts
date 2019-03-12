import {Entity, model, property} from '@loopback/repository';

@model()
export class TaskCategory extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  desc?: string;

  constructor(data?: Partial<TaskCategory>) {
    super(data);
  }
}
