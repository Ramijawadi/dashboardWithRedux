import USER from "../store/constant";

const initalState = {
  usersData: [],
  isLoading: false,
  isError: false,
};

export default  (state = {initalState}, action) => {
  switch (action.type) {
    case USER.LOAD:
      state = {
        ...state,
        isLoading: true,
        isError: false,
      };
      break;
    case USER.LOAD_SUCCESS:
      state = {
        ...state,
        usersData: action.payload.users,
        isLoading: false,
        isError : action.payload.isError
      };
      break;

      case USER.LOAD_FAILURE:
        state = {
          ...state,
          usersData: action.payload.users,
          isLoading: false,
          isError : action.payload.isError
        };
        break;
      }
return state
  }
