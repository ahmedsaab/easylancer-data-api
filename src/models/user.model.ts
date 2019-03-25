import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'number',
    default: 0,
  })
  likes?: number;

  @property({
    type: 'number',
    default: 0,
  })
  dislikes?: number;

  @property({
    type: 'array',
    itemType: 'object',
    default: [],
  })
  badges?: object[];

  @property({
    type: 'boolean',
    default: false,
  })
  isApproved?: boolean;

  @property({
    type: 'number',
    default: 0,
  })
  gender: number;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
