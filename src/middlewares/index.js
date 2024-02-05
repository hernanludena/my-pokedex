export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action); //cuando finalizan las acciones va al reducer
};

//Anade un pokemon personalizado a la lista
export const featuring = (store) => (next) => (actionInfo) => { //actionInfo viajan todos los pokemon
  const featured = [{ name: 'hlu' }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured }, //copia del action mas la lista nueva modificada con el nuevo pokemon
  };
  next(updatedActionInfo); //llama al Reducer
};
