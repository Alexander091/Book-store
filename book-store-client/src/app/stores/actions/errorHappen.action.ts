import {CommonAction} from "./common.action";
import {BooksState} from "../appstore.state";
import {setStateProperties} from "../../shared/helpers/general.helpers";

export class ErrorHappenAction extends CommonAction {
  public static readonly actionName  = 'ERROR';

  constructor(public err:Error) {
    super(ErrorHappenAction.actionName, handler);
  }

}

function handler (state: BooksState, action:ErrorHappenAction) {
  return setStateProperties(state, {
    loading: false,
    error: action.err
  });
}
