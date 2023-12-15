const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return { ...state, user: action.payload };
      case 'CLEAR_USER_DATA':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  