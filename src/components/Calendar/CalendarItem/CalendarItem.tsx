import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
import {IDay} from "@/interfaces";
// @ts-ignore
import styles from './CalendarItem.scss?module';

interface Props {
  day: IDay,
  focusedDay: IDay,
  selectDay: Function,
  isChrome: boolean
}
@Component
export default class CalendarItem extends VueComponent<Props> {

  @Prop() private day!: IDay;
  @Prop() private focusedDay!: IDay;
  @Prop() private selectDay!: Function;
  @Prop() private isChrome!: boolean;

  public checkAndSelectDay() {
    if(this.day && this.day.id) {
      this.selectDay(this.day.id)
    }
  };

  render() {

    const { day: {id, isToday, tasks}, focusedDay } = this;

    return (
      this.day ?
        <span
          class={`
            ${styles.calendar__list__item}
            ${tasks && tasks.length ? styles.calendar__list__item_tasks : ''}
            ${isToday ? styles.calendar__list__item_today : ''}
            ${id === focusedDay.id ? styles.calendar__list__item_focused: ''}
            ${id ? '' : styles.calendar__list__item_noBehavior}
            ${this.isChrome ? '' : styles.calendar__list__item_noChrome}
          `}
          onclick={this.checkAndSelectDay}
        >
          {this.day.day}
        </span> :
        null
    )
  }
}
