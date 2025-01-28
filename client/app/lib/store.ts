
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice"
import templateReducer from "./features/templateSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth : authReducer,
      templates : templateReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']