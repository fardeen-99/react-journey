import { createSlice } from "@reduxjs/toolkit";

const collection = createSlice({
  name: "collection-multimedia",
  initialState: {
    value: JSON.parse(localStorage.getItem("collection")) || []
  },
  reducers: {
    addcollection: (state, action) => {
      state.value.push(action.payload); // ✅ correct
      localStorage.setItem("collection", JSON.stringify(state.value));
    },
    removecollection: (state, action) => {
      state.value = state.value.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("collection", JSON.stringify(state.value));
    }
  }
});

export const { addcollection, removecollection } = collection.actions;
export default collection.reducer;
