export const ADD_DRINK = "ADD_DRINK";
export const DELETE_DRINK = "DELETE_DRINK";
export const UPDATE_DRINK = "UPDATE_DRINK";

export const addDrinkAction = (drink) => {
  return {
    type: ADD_DRINK,
    payload: drink,
  };
};

export const deleteDrinkAction = (drink) => {
  return {
    type: DELETE_DRINK,
    payload: drink,
  };
};

export const updateDrinkAction = (drink) => {
  return {
    type: UPDATE_DRINK,
    payload: drink,
  };
};
