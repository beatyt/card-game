import ProgressTurn from "../../api/actions/turns/ProgressTurn";
import EventTracker from "../../api/events/EventTracker";

export interface ITurn {
  progress: () => void;
}

const actions = {
  progress: () => {
    EventTracker.getInstance().dispatchStateModifyingEvent(new ProgressTurn());
  }
}

const state = {}

export default {
  ...actions,
  ...state,
}
