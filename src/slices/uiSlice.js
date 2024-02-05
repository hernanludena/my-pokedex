import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,  // Esta propiedad se usa para rastrear si alguna parte de la aplicación está en proceso de carga.
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {  
      state.loading = action.payload; //en el payload, llega un boolean true/false
    },
  },
});
// setLoading: Este reducer toma el estado actual y una acción, y actualiza la propiedad loading del estado con 
// el valor de action.payload.  Se usa para cambiar el estado de carga de la aplicación.

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
