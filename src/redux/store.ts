import { configureStore } from "@reduxjs/toolkit";
import { selectedDateSlice } from "./features/selectDate";
import { logger } from "./middleware/logger";
import { laundryEntriesApi } from "./services/laundryEntriesApi";
import { entriesApi } from "./services/entriesApi";

export const store = configureStore({
    reducer: {
        selectedDate: selectedDateSlice.reducer,
        [laundryEntriesApi.reducerPath]: laundryEntriesApi.reducer,
        [entriesApi.reducerPath]: entriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([laundryEntriesApi.middleware, entriesApi.middleware, logger]),
    devTools: process.env.NODE_ENV !== 'production'
});
