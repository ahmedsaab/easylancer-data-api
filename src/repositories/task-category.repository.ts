import {DefaultCrudRepository} from '@loopback/repository';
import {TaskCategory} from '../models';
import {CoreMongoDBDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TaskCategoryRepository extends DefaultCrudRepository<
  TaskCategory,
  typeof TaskCategory.prototype.id
> {
  constructor(
    @inject('datasources.coreMongoDB') dataSource: CoreMongoDBDataSource,
  ) {
    super(TaskCategory, dataSource);
  }
}
