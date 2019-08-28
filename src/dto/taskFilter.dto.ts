import { TaskStatus } from '@modules/tasks/tasks.enum';
import { ApiModelProperty } from '@nestjs/swagger';
export class TaskFilter {
  @ApiModelProperty()
  public taskStatus: TaskStatus;
  @ApiModelProperty()
  public search: string;
}
