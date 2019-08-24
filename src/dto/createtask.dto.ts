import { TaskStatus } from '../modules/tasks/tasks.enum';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTask {
  @ApiModelProperty()
  public id?: number;
  @ApiModelProperty()
  public title: string;
  @ApiModelProperty()
  public description: string;
  @ApiModelProperty()
  public status: TaskStatus;
}
