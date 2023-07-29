import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from "../features/counter/counterSlice"
import { devicesApi } from "../features/devices/devicesAPI"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [devicesApi.reducerPath]: devicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(devicesApi.middleware),
})

setupListeners(store.dispatch)



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
