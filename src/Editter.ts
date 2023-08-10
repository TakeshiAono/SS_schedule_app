import { EditSheet } from "./sheets";
import { RegisterEditRange } from "./EditTablePosConsts"

export default class Editor {
  static getProjectEditRecord (): any {
    return EditSheet?.getRange(RegisterEditRange).getValues()
  } 
}