import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {TaskCategory} from '../models';
import {TaskCategoryRepository} from '../repositories';

export class TaskCategoryController {
  constructor(
    @repository(TaskCategoryRepository)
    public taskCategoryRepository : TaskCategoryRepository,
  ) {}

  @post('/task-categories', {
    responses: {
      '200': {
        description: 'TaskCategory model instance',
        content: {'application/json': {schema: {'x-ts-type': TaskCategory}}},
      },
    },
  })
  async create(@requestBody() taskCategory: TaskCategory): Promise<TaskCategory> {
    return await this.taskCategoryRepository.create(taskCategory);
  }

  @get('/task-categories/count', {
    responses: {
      '200': {
        description: 'TaskCategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TaskCategory)) where?: Where,
  ): Promise<Count> {
    return await this.taskCategoryRepository.count(where);
  }

  @get('/task-categories', {
    responses: {
      '200': {
        description: 'Array of TaskCategory model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': TaskCategory}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TaskCategory)) filter?: Filter,
  ): Promise<TaskCategory[]> {
    return await this.taskCategoryRepository.find(filter);
  }

  @patch('/task-categories', {
    responses: {
      '200': {
        description: 'TaskCategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() taskCategory: TaskCategory,
    @param.query.object('where', getWhereSchemaFor(TaskCategory)) where?: Where,
  ): Promise<Count> {
    return await this.taskCategoryRepository.updateAll(taskCategory, where);
  }

  @get('/task-categories/{id}', {
    responses: {
      '200': {
        description: 'TaskCategory model instance',
        content: {'application/json': {schema: {'x-ts-type': TaskCategory}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<TaskCategory> {
    return await this.taskCategoryRepository.findById(id);
  }

  @patch('/task-categories/{id}', {
    responses: {
      '204': {
        description: 'TaskCategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() taskCategory: TaskCategory,
  ): Promise<void> {
    await this.taskCategoryRepository.updateById(id, taskCategory);
  }

  @put('/task-categories/{id}', {
    responses: {
      '204': {
        description: 'TaskCategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() taskCategory: TaskCategory,
  ): Promise<void> {
    await this.taskCategoryRepository.replaceById(id, taskCategory);
  }

  @del('/task-categories/{id}', {
    responses: {
      '204': {
        description: 'TaskCategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.taskCategoryRepository.deleteById(id);
  }
}
