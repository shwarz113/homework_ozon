import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
import TasksListItem from "./TasksListItem/TasksListItem";
import {IDay, ITask} from "@/interfaces";
// @ts-ignore
import styles from './TasksList.scss?module';

interface Props {
  focusedDay: IDay,
  addTask: Function,
  makeDoneTask: Function
}

@Component
export default class TasksList extends VueComponent<Props> {

  @Prop() private focusedDay!: IDay;
  @Prop() private addTask!: Function;
  @Prop() private makeDoneTask!: Function;

  private checkAndAddTask(e: any) : void {
    if(e.key === 'Enter' && e.target.value !== '') {
      this.addTask(e.target.value);
      e.target.value= '';
    }
  }

  render() {

    const {tasks} = this.focusedDay;

    return (
      <div class={`box ${styles.tasksList}`}>
        <div class={'title'}>События</div>
        <div class={styles.tasksList_wrapper}>
          {
            tasks && tasks.length ?
              tasks.map( (task:ITask) => <TasksListItem task={task} makeDoneTask={this.makeDoneTask} />
              ):
              null
          }
        </div>
        <input
          class={`${styles.tasksList__input} ${tasks && tasks.length ? styles.tasksList__input_margin : ''}`}
          type="text"
          placeholder={'Введите событие'}
          onkeyup={this.checkAndAddTask}
        />
      </div>
    )
  }
}
