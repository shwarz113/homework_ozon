import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
import CalendarItem from "@/components/Calendar/CalendarItem/CalendarItem";
import {IDay} from "@/interfaces";
// @ts-ignore
import styles from './Calendar.scss?module';

interface Props {
  title: string,
  weekNames: Array<string>
  allDays: Array<IDay>
  focusedDay: IDay,
  selectDay: Function
}

@Component
export default class Calendar extends VueComponent<Props> {

  @Prop() private title!: string;
  @Prop() private weekNames!: Array<string>;
  @Prop() private allDays!: Array<IDay>;
  @Prop() private focusedDay!: IDay;
  @Prop() private selectDay!: Function;

  render() {
    const {title, weekNames, allDays} = this;

    return (
      allDays && allDays.length ?
        <div class={`box ${styles.calendar}`}>
          <div class={'title'}>{title}</div>
          <div class={styles.calendar__weeks}>
            {
              weekNames.map( (el: string) => (
                <span class={styles.calendar__weeks__item}>{el}</span>
              ))
            }
          </div>
          <div class={`${styles.calendar__list} ${styles.calendar__list_week}${Math.ceil(allDays.length/7)}`}>
            {
              allDays.map( (el: IDay) => (
                <CalendarItem
                  key={el.id}
                  focusedDay={this.focusedDay}
                  day={el}
                  selectDay={this.selectDay}
                />
              ) )
            }
          </div>
        </div> :
        null
    )
  }
}
