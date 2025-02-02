import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
