import { Mutation } from 'vuex-simple';
import {PlannerGetters} from "@/store/modules/plannerGetters";
import {makeCalendarList} from "@/exports";

export class PlannerMutations extends PlannerGetters {
  @Mutation()
  public setDate(date: Date) {
    this.currentDate.date = date;
    this.currentDate.year = date.getFullYear();
    this.currentDate.month = date.getMonth();
    this.currentDate.day = date.getDate();
    const daysList = makeCalendarList(date, this.dictionaries);
    const today = daysList.find((el:any) => el.day === date.getDate() && el.iWeek === date.getDay()) || daysList[0];
    this.allDays = daysList;
    this.focusedDay = today;
  }
  @Mutation()
  public selectDay(dayId: string | undefined) {
    this.focusedDay = this.allDays.find((el) => el.id === dayId) || this.allDays[0]
  }
  @Mutation()
  public addTask(taskName: string) {
    const focusedDayId = this.focusedDay.id;
    this.allDays.forEach( (day: any) => {
      if (focusedDayId === day.id) {
        const newTask = {
          id: Date.now() + '__task__Id',
          name: taskName,
          done: false
        };
        day.tasks.push(newTask);
      }
    })
  }
  @Mutation()
  public makeDoneTask(taskId: string ) {
    const focusedDayId = this.focusedDay.id;
    this.allDays.forEach( (day: any) => {
      if (focusedDayId === day.id) {
        day.tasks.forEach((task:any) => {
          if (taskId === task.id) {
            task.done = !task.done;
          }
        })
      }
    })
  }
}
