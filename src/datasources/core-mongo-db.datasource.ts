import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './core-mongo-db.datasource.json';

export class CoreMongoDBDataSource extends juggler.DataSource {
  static dataSourceName = 'coreMongoDB';

  constructor(
    @inject('datasources.config.coreMongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
