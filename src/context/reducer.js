import {
  SHOW_CART,
  ADD_CART,
  DELETE_ITEM,
  INCREASE_QTY,
  DECREASE_QTY,
  EMPTY_CART,
  COUNTER,
  COST_TOTAL,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SHOW_CART) {
    return {
      ...state,
      isLoading: false,
      isError: false,
    };
  }
  if (action.type === ADD_CART) {
    const existingItem = state.cart.find(
      (cart) => cart._id === action.payload._id
    );
    if (existingItem) {
      state.cart.map((cart) =>
        cart._id === action.payload._id ? { ...cart, qty: cart.qty++ } : cart
      );
    } else {
      const newItem = { ...action.payload, qty: 1 };
      state.cart = [...state.cart, newItem];
    }

    return {
      ...state,
      itemCounter: state.cart.reduce((total, item) => {
        return total + item.qty;
      }, 0),
      total: state.cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0),
    };
  }

  if (action.type === DELETE_ITEM) {
    const updatedCart = state.cart.filter((el) => el._id !== action.payload);
    
    return {
      ...state,
      cart: updatedCart,
      itemCounter: updatedCart.reduce((total, item) => {
        return total + item.qty;
      }, 0),
      total: updatedCart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0),
    };
  }

  if (action.type === INCREASE_QTY) {
    const updatedCart = state.cart.map((el) => {
      if (action.payload === el._id) {
        return {
          ...el,
          qty: el.qty + 1,
        };
      }
      return el;
    });

    const itemCounter = updatedCart.reduce(
      (total, item) => total + item.qty,
      0
    );
    const total = updatedCart.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    return {
      ...state,
      cart: updatedCart,
      itemCounter,
      total,
    };
  }

  if (action.type === DECREASE_QTY) {
    const updatedCart = state.cart.map((el) => {
      if (action.payload === el._id) {
        return {
          ...el,
          qty: el.qty - 1,
        };
      }
      return el;
    });

    const itemCounter = updatedCart.reduce(
      (total, item) => total + item.qty,
      0
    );
    const total = updatedCart.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    return {
      ...state,
      cart: updatedCart,
      itemCounter,
      total,
    };
  }

  if (action.type === COST_TOTAL) {
    return {
      ...state,
      total: state.cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0),
    };
  }
  if (action.type === COUNTER) {
    return {
      ...state,
      itemCounter: state.cart.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }

  if (action.type === EMPTY_CART) {
    return {
      ...state,
      cart: [],
      itemCounter: 0,
      total: 0,
    };
  }
  return state;
};

export default reducer;
