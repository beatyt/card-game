import ProgressPhase from "../../api/actions/phases/ProgressPhase";
import EventTracker from "../../api/events/EventTracker";

export interface IPhase {
  progress: () => void;
}

const actions = {
  progress: () => {
    EventTracker.getInstance().dispatchStateModifyingEvent(new ProgressPhase());
  }
}

const state = {}

export default {
  ...actions,
  ...state,
}
