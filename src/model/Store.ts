import type { TableColumnNames, InputData, } from "../types/table"
import { spreadSheet } from "@/sheets";


export type TableName = "Field" | "MileStone" | "Project" | "Schedule" | "User" | "Work"

export class Store {
  // parentModelName: string
  MODELS = ["Field", "MileStone", "Project", "Schedule", "User", "Work"]
  initializationRowNumber = 3;

  
  constructor(parentModelName: TableName) {
    // this.parentModelName = parentModelName
  }

  insert(parentModelName: string, record: InputData) {
    spreadSheet?.getSheetByName(parentModelName)
  }

  #create(parentModelName: string, record: [string, string]) {
    const addRowNum = this.#lastIndexNumber(parentModelName)
    // spreadSheet?.getSheetByName(parentModelName).getRange(addRowNum, 1 , 1 , 6).setValues(
    //   [[
    //     this.willNewId,
    //     ...record,
    //     null,
    //     new Date().toLocaleDateString(),
    //     new Date().toLocaleDateString(),
    //   ]]
    // )
    // this.addableRowNumber = addRowNum + 1
  }

  #lastIndexNumber(parentModelName: string): number {
    let rowCounter: number = this.initializationRowNumber
    // while (this.#getValue(parentModelName, rowCounter, 1) !== "") {
    //   rowCounter++
    // }
    return rowCounter
  }

    #getValue(parentModelName: string, row: number, column: number) {
    // return spreadSheet?.getSheetByName(parentModelName).getRange(row, column).getValue()
  }

  update() {}
  delete() {}
}