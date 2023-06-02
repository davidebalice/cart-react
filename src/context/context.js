import React, { useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import reducer from "./reducer";

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

const AppContext = React.createContext();

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [typeDelete, setTypeDelete] = useState(1);
  const [confirmMsg, setConfirmMsg] = useState("");

  const deleteItem = (id) => {
    return dispatch({ type: DELETE_ITEM, payload: id });
  };

  const addCart = (item) => {
    return dispatch({ type: ADD_CART, payload: item });
  };

  const addQty = (id) => {
    return dispatch({ type: AUMENTA_QTY, payload: id });
  };

  const dimQty = (id) => {
    return dispatch({ type: DIMINUISCI_QTY, payload: id });
  };

  const deleteAll = () => {
    return dispatch({ type: SVUOTA_CARRELLO });
  };
  /*
  useEffect(() => {
    dispatch({
      type: SHOW_CART,
      payload: state.cart,
    });
    dispatch({ type: COSTO_TOTALE });
    dispatch({ type: CONTATORE });
  }, [state.cart]);
*/

  useEffect(() => {
    dispatch({
      type: SHOW_CART,
      payload: state.cart,
    });
    //dispatch({ type: COSTO_TOTALE });
    //dispatch({ type: CONTATORE });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteItem,
        addCart,
        addQty,
        dimQty,
        deleteAll,
        showModal,
        setShowModal,
        selectedId,
        setSelectedId,
        typeDelete,
        setTypeDelete,
        confirmMsg,
        setConfirmMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
