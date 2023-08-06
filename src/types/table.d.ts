export type TableColumnNames = String[]

export type ProjectsTableColumnTypes = {
  id: Number,
  name: String,
  finalDate: Date,
  delayRate: Number | null,
  updateAt: Date,
  createdAt: Date,
}