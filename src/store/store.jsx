import { configureStore } from "@reduxjs/toolkit";
import { telegramApi } from "../Services/Telegram";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
  reducer: {
    [telegramApi.reducerPath]: telegramApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(telegramApi.middleware);
  }
});

setupListeners(store.dispatch);