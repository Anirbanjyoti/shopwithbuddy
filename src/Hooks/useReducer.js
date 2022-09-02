const useReducer = (state, action) => {
  if (action.type) {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, quantity: 1 }],
    };
  }

  return [state];
};
export default useReducer;
