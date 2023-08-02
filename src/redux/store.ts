import { configureStore } from "@reduxjs/toolkit";
import { selectedDateSlice } from "./features/selectDate";
import { logger } from "./middleware/logger";
import { laundryEntriesApi } from "./services/laundryEntriesApi";
import { entriesApi } from "./services/entriesApi";
import { authApi } from "./services/authApi";
import { toastsSlice } from "./features/toasts";
import { paymentsApi } from "./services/paymentsApi";

export const store = configureStore({
    reducer: {
        selectedDate: selectedDateSlice.reducer,
        toasts: toastsSlice.reducer,
        [laundryEntriesApi.reducerPath]: laundryEntriesApi.reducer,
        [entriesApi.reducerPath]: entriesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [paymentsApi.reducerPath]: paymentsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([laundryEntriesApi.middleware, entriesApi.middleware, authApi.middleware, paymentsApi.middleware, logger]),
    devTools: process.env.NODE_ENV !== 'production'
});
