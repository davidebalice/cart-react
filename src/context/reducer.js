import {
  SHOW_CART,
  ADD_CART,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  SVUOTA_CARRELLO,
  CONTATORE,
  COSTO_TOTALE,
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
    return {
      ...state,
      cart: state.cart.filter((el) => el._id !== action.payload),
    };
  }

  if (action.type === AUMENTA_QTY) {
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

  if (action.type === DIMINUISCI_QTY) {
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

  if (action.type === COSTO_TOTALE) {
    return {
      ...state,
      total: state.cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0),
    };
  }
  if (action.type === CONTATORE) {
    return {
      ...state,
      itemCounter: state.cart.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }
  if (action.type === SVUOTA_CARRELLO) {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default reducer;
