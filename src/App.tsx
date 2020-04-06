import { Component, Vue } from 'vue-property-decorator';
import { MyStore } from '@/store/store';
import {Mutation, useStore} from "vuex-simple";
import {store} from "@/store/index";
import Calendar from './components/Calendar/Calendar';
import TasksList from './components/TasksList/TasksList';
import './App.scss'

@Component
export default class App extends Vue {

  public store: MyStore = useStore(store);

  // getters
  public get getTitle() {
    return this.store.planner.calendarTitle;
  }
  public get getWeekNames() {
    return this.store.planner.weekNames;
  }
  public get getAllDays() {
    return this.store.planner.allDays;
  }
  public get getFocusedDay() {
    return this.store.planner.focusedDay
  }

  // mutations
  public selectDay(id: string) {
    this.store.planner.selectDay(id);
  }
  public addTask(name: string) {
    this.store.planner.addTask(name);
  }
  public makeDoneTask(id: string) {
    this.store.planner.makeDoneTask(id)
  }

  // lifecycle
  public mounted(): void {
    this.store.planner.setDate(new Date())
  }

  // checkBrowser
  public checkBrowser() {
    const sUsrAg = navigator.userAgent;
    const browsers = [ 'Firefox', 'OPR', 'Trident', 'Edge', 'YaBrowser', 'Chrome', 'Safari'];  // порядок важен
    const sBrowser = browsers.find( (el:any) => sUsrAg.indexOf(el) > -1);
    return sBrowser === "Chrome";
  };

  render() {
    return (
      <div id="app">
        <Calendar
          title={this.getTitle}
          weekNames={this.getWeekNames}
          allDays={this.getAllDays}
          focusedDay={this.getFocusedDay}
          selectDay={this.selectDay}
          isChrome={this.checkBrowser()}
        />
        <TasksList
          focusedDay={this.getFocusedDay}
          addTask={this.addTask}
          makeDoneTask={this.makeDoneTask}
        />
      </div>
    )
  }
}
