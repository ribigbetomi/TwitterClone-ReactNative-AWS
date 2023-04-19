import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../components/UserFleetsList/queries";
import { GET_FLEETERS } from "../Constants/FleetConstants";

export const getFleeters = () => async (dispatch) => {
  const { data } = await API.graphql(graphqlOperation(listUsers));
  const fleeters = data.listUsers.items.filter(
    (item) => item.fleets.items.length !== 0
  );

  dispatch({
    type: GET_FLEETERS,
    payload: fleeters,
  });
};
