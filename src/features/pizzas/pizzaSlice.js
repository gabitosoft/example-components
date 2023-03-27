import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  id: 1,
  name: 'Especial',
  description: 'La mas grande y deliciosa pizza'
}, {
  id: 2,
  name: 'Familiar',
  description: 'Pizza de 8 porciones para toda la familia'
}]

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.push(action.payload)
    },
    deletePizza: (state, action) => {
      const foundPizza = state.find(p => p.id === action.payload.id)
      if (foundPizza) {
        state.splice(foundPizza, 1)
      }
    }
  }
})

export const { addPizza, deletePizza } = pizzaSlice.actions
export default pizzaSlice.reducer
