import { createSlice } from "@reduxjs/toolkit";

// Retrieve dark mode state from localStorage or default to false (light mode)
const initialState = {
  darkMode: localStorage.getItem("theme") === "dark" ? true : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode; // Toggle dark mode state
      localStorage.setItem("theme", state.darkMode ? "dark" : "light"); // Save to localStorage
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
