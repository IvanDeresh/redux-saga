const defaultState = {
  count: 0,
};
export const INCRIMENT = "INCRIMENT";
export const DECRIMENT = "DECRIMENT";
export const ASYNC_INCRIMENT = "ASYNC_INCRIMENT";
export const ASYNC_DECRIMENT = "ASYNC_DECRIMENT";
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCRIMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECRIMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default reducer;
export const incrimentCreater = () => ({ type: INCRIMENT });
export const decrimentCreater = () => ({ type: DECRIMENT });
export const asyncincrimentCreater = () => ({ type: ASYNC_INCRIMENT });
export const asyncdecrimentCreater = () => ({ type: ASYNC_DECRIMENT }); //
