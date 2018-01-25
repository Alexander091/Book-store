import {Action} from "@ngrx/store";

export class CommonAction implements Action {

  constructor(public readonly type: string, public readonly handler: Function) {
  }

}
