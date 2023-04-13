import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../components/UserFleetsList/queries";
import { GET_FLEETERS } from "../Constants/FleetConstants";

// ADD TO CART
export const getFleeters = () => async (dispatch) => {
  console.log("flee");
  const { data } = await API.graphql(graphqlOperation(listUsers));
  const fleeters = data.listUsers.items.filter(
    (item) => item.fleets.items.length !== 0
  );

  // setUsers(fleeters);

  console.log(fleeters, "fleet");

  dispatch({
    type: GET_FLEETERS,
    payload: fleeters,
  });
};
