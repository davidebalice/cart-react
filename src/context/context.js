import React, { useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import reducer from "./reducer";

import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_SUCCESS,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  SVUOTA_CARRELLO,
  CONTATORE,
  COSTO_TOTALE,
} from "./actions";

const AppContext = React.createContext();

const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
  products: [],
  isLoading: true,
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

  const addQty = (id) => {
    return dispatch({ type: AUMENTA_QTY, payload: id });
  };

  const dimQty = (id) => {
    return dispatch({ type: DIMINUISCI_QTY, payload: id });
  };

  const deleteAll = () => {
    return dispatch({ type: SVUOTA_CARRELLO });
  };
  useEffect(() => {
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({
          type: DATA_FETCHING_SUCCESS,
          payload: response.data.data,
        });
      } catch (err) {
        dispatch({ type: DATA_FETCHING_FAILED });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({ type: COSTO_TOTALE });
    dispatch({ type: CONTATORE });
  }, [state.products]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteItem,
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
