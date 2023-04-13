import { GET_FLEETERS } from "../Constants/FleetConstants";

export const getFleetersReducer = (state = { fleeters: [] }, action) => {
  switch (action.type) {
    case GET_FLEETERS:
      return { fleeters: action.payload };

    default:
      return state;
  }
};
