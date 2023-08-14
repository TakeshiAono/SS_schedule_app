import ProjectsModel from "./model/Project"
import { ProjectsTableColumnTypes } from "./types/table"
import { RegisterEditRange } from "./EditTablePosConsts"
import Editor from "./Editter";

// const editor = new Editor()

export const record: ProjectsTableColumnTypes = {
  id: 1,
  name: "testProject",
  finalDate: new Date(Date.now()),
  delayRate: null,
  updateAt: new Date(Date.now()),
  createdAt: new Date(Date.now()),
}

export const registerProjectRecord = () => {
  const record: [string, string] = Editor.getProjectEditRecord()[0]
  const date = new Date(record[1])
  date.setDate(date.getDate() + 1)
  record[1] = date.toLocaleDateString()
  const projectsModel = new ProjectsModel()
  projectsModel.create(record)
}

export const registerScheduleRecord = () => {
  const record: [string, string] = Editor.getScheduleEditRecord()[0]
  const date = new Date(record[1])
  date.setDate(date.getDate() + 1)
  record[1] = date.toLocaleDateString()
  const projectsModel = new ProjectsModel()
  projectsModel.create(record)
}

export const registerUserRecord = () => {
  const record: [string, string] = Editor.getUserEditRecord()[0]
  const date = new Date(record[1])
  date.setDate(date.getDate() + 1)
  record[1] = date.toLocaleDateString()
  const projectsModel = new ProjectsModel()
  projectsModel.create(record)
}