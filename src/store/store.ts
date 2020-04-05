import { Module, State } from 'vuex-simple';
import {PlannerMutations} from './modules/plannerMutations';

export class MyStore {

  @Module()
  public planner = new PlannerMutations();

}
