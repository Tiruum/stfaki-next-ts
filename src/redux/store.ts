import { configureStore } from "@reduxjs/toolkit";
import { selectedDateSlice } from "./features/selectDate";
import { logger } from "./middleware/logger";
import { laundryEntriesApi } from "./services/laundryEntriesApi";

export const store = configureStore({
    reducer: {
        selectedDate: selectedDateSlice.reducer,
        [laundryEntriesApi.reducerPath]: laundryEntriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([laundryEntriesApi.middleware, logger]),
    devTools: process.env.NODE_ENV !== 'production'
});
