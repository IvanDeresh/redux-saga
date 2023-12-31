const defaultState = {
  users: [],
};

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default userReducer;
export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const fetchUsers = () => ({ type: FETCH_USERS });
