import { v4 as uuidv4 } from "uuid";

const initState = {
  data: []
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SUBMIT_NEW_USER":
      return {
        ...state,
        users: state.users.concat({
          id: uuidv4(),
          username: payload.username,
          email: payload.email,
          password: payload.password
        })
      };
    default:
      return state;
  }
};
