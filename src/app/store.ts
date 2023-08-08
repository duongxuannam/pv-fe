import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import userReducer from "../features/user/userSlice"
import { devicesApi } from "../features/devices/devicesAPI"

export const store = configureStore({
  reducer: {
    user: userReducer,
    [devicesApi.reducerPath]: devicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(devicesApi.middleware),
})

setupListeners(store.dispatch)

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
