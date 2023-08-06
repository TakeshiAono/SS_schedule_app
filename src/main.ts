import ProjectsModel from "./model/ProjectModel"
import { ProjectsTableColumnTypes } from "./types/table"
import { RegisterEditRange } from "./EditTablePosConsts"
import Editor from "./Editter";

// const editor = new Editor()

const record: ProjectsTableColumnTypes = {
  id: 1,
  name: "testProject",
  finalDate: new Date(Date.now()),
  delayRate: null,
  updateAt: new Date(Date.now()),
  createdAt: new Date(Date.now()),
}

const registerProjectRecord = () => {
  const record: [string, string] = Editor.getProjectEditRecord()[0]
  const date = new Date(record[1])
  date.setDate(date.getDate() + 1)
  record[1] = date.toLocaleDateString()
  const projectsModel = new ProjectsModel()
  projectsModel.create(record)
}