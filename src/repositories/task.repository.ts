import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository,
} from '@loopback/repository';
import {Task, User} from '../models';
import {CoreMongoDBDataSource} from '../datasources';
import {Getter, inject} from '@loopback/core';
import {UserRepository} from '../repositories';

export class TaskRepository extends DefaultCrudRepository<Task, typeof Task.prototype.id> {
  public readonly user: BelongsToAccessor<User, typeof Task.prototype.id>;

  constructor(
    @inject('datasources.coreMongoDB') dataSource: CoreMongoDBDataSource,
    @repository.getter('UserRepository') userRepositoryGetter: Getter<UserRepository>
  ) {
    super(Task, dataSource);
    this.user = this.createBelongsToAccessorFor(
      'ownerUser',
      userRepositoryGetter,
    );
  }
}
