import { TableColumnNames, ProjectsTableColumnTypes } from "../types/table";
import { ProjectsSheet } from "../sheets";

export default class ProjectsModel {
  initializationRowNumber = 3;
  public addableRowNumber: number
  public lastId: number
  public willNewId: number

  constructor() {
    this.addableRowNumber = this.#lastIndexNumber()
    //最初の入力時にはlastIdを0とする。
    this.lastId = this.addableRowNumber === 3 ? 0 : this.#getValue(this.addableRowNumber - 1, 1)
    this.willNewId = this.lastId + 1
  }

  create( record: [string, string]) {
    const addRowNum = this.#lastIndexNumber()
    ProjectsSheet?.getRange(addRowNum, 1 , 1 , 6).setValues(
      [[
        this.willNewId,
        ...record,
        null,
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
      ]]
    )
    this.addableRowNumber = addRowNum + 1
  }

  #lastIndexNumber(): number {
    let rowCounter: number = this.initializationRowNumber
    while (this.#getValue(rowCounter, 1) !== "") {
      rowCounter++
    }
    return rowCounter
  }

  #getValue(row: number, column: number) {
    return ProjectsSheet?.getRange(row, column).getValue()
  }
}
