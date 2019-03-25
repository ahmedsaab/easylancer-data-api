import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from "./user.model";

@model()
export class Task extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @belongsTo(() => User)
  ownerUserId: string;

  @property({
    type: 'object',
  })
  ownerUser: object;

  @property({
    type: 'array',
    itemType: 'number',
    default: [],
  })
  offerIds?: number[];

  @property({
    type: 'number',
  })
  acceptedOfferId?: number;


  constructor(data?: Partial<Task>) {
    super(data);
  }
}
