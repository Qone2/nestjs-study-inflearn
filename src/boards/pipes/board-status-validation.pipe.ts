import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    BoardStatus.PUBLIC,
    BoardStatus.PRIVATE
  ];

  transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`)
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.StatusOptions.indexOf(status) !== -1;
  }
}
