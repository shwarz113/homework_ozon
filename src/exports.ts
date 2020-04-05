import {IDay, IDictionaries} from "@/interfaces";

export const makeCalendarList = (date: Date, dictionaries: IDictionaries) : Array<IDay> =>  {
  const currentDay = date.getDate();
  const indexCurrentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const firstDayWeekOfCurrentMonth = new Date(`${date.getFullYear()}-${date.getMonth()+1}-01`).getDay();
  const daysList = new Array(dictionaries.YEAR_DAYS[indexCurrentMonth])
    .fill(0)
    .map( (el, i) => ({
      id: `${i+1}_id_${Date.now()}`,
      iWeek: weekCounter(currentYear, indexCurrentMonth,i+1),
      day: i+1,
      isToday: currentDay === i+1,
      tasks: []
    }) );
  const emptyFirstDays = new Array(firstDayWeekOfCurrentMonth === 0 ? 5 : firstDayWeekOfCurrentMonth - 1)
    .fill('')
    .map((el, i) => ( {iWeek: i+1, day: el} ));
  return [...emptyFirstDays, ...daysList]
};

export const weekCounter = (year: number, month: number, day: number) : number =>
  new Date(`${year}-${month+1}-${day}`).getDay();
