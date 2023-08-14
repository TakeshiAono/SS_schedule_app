import { EditSheet } from "./sheets";
import { RegisterEditRange } from "./EditTablePosConsts"

export default class Editor {
  static getProjectEditRecord (): any {
    return EditSheet?.getRange(RegisterEditRange).getValues()
  } 

  static getScheduleEditRecord (): any {
    // return EditSheet?.getRange(RegisterEditRange).getValues()
  } 

  static getUserEditRecord (): any {
    // return EditSheet?.getRange(userEditRange).getValues()
  } 
}