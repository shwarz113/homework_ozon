export interface IDictionaries {
  WEEK_NAMES: Array<string>,
  YEAR_DAYS: Array<number>,
  MONTHS: Array<string>
}
export interface ICurrentDate {
  date: Date | null,
  year: number | null,
  month: number | null,
  day: number | null,
}
export interface IDay {
  id?: string,
  iWeek: number | null,
  day: number | null,
  isToday?: boolean | null,
  tasks?: Array<ITask> | null
}
export interface ITask {
  id: string,
  name: string,
  done: boolean
}
