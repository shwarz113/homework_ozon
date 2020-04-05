import { State } from 'vuex-simple';
import {ICurrentDate, IDay, IDictionaries, ITask} from '@/interfaces';

export class PlannerState {
  @State()
  public dictionaries: IDictionaries = {
    WEEK_NAMES: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    YEAR_DAYS: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    MONTHS: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  };
  @State()
  public currentDate: ICurrentDate = {
    date: null,
    year: null,
    month: null,
    day: null
  };
  @State()
  public focusedDay:IDay = {
    id: '',
    iWeek: null,
    day: null,
    isToday: null,
    tasks: []
  };
  @State()
  public allDays: Array<IDay> = [];
}
