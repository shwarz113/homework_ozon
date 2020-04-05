import { Getter } from 'vuex-simple';
import {PlannerState} from "@/store/modules/plannerState";

export class PlannerGetters extends PlannerState {

  @Getter()
  public get weekNames(): Array<string> {
    const [firstWeekName, ...restWeekDays] = this.dictionaries.WEEK_NAMES;
    return [...restWeekDays, firstWeekName]
  }
  @Getter()
  public get calendarTitle(): string {
    return this.currentDate.month ?
      `${this.dictionaries.MONTHS[this.currentDate.month || 1]} ${this.currentDate.year}` :
      ''
  }
  // public get allMonthDays() {
  //   return this.allDays
  // }
  // public get selectedDay() {
  //   return this.focusedDay
  // }
}
