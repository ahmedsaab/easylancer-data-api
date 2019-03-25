import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {CoreMongoDBDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.coreMongoDB') dataSource: CoreMongoDBDataSource,
  ) {
    super(User, dataSource);
  }
}
