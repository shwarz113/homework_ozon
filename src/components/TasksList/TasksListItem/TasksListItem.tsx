import {Component, Prop} from "vue-property-decorator";
import { VueComponent } from '@/shims-vue';
import {ITask} from "@/interfaces";
// @ts-ignore
import styles from './TasksListItem.scss?module';

interface Props {
  task: ITask,
  makeDoneTask: Function
}
@Component
export default class TasksListItem extends VueComponent<Props> {

  @Prop() private task!: ITask;
  @Prop() private makeDoneTask!: Function;

  private toggleDone() : void {
    if(this.task) {
      this.makeDoneTask(this.task.id)
    }
  };

  render() {
    const { name, done } = this.task;
    return (
      this.task ?
        <label class={styles.TasksListItem}>
          <input type="checkbox" checked={done} onchange={this.toggleDone}/>
          <span/>
          <div class={styles.TasksListItem__name}>{name}</div>
        </label> :
        null
    )
  }
}
