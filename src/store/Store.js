import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'

import { employeeApi } from '../features/employees/employeesApi'
import { scheduleApi } from '../features/schedule/scheduleApi'

export const store = configureStore({
    reducer:{
        [employeeApi.reducerPath]:employeeApi.reducer,
        [scheduleApi.reducerPath]:scheduleApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        employeeApi.middleware,
        scheduleApi.middleware,
    )
})

setupListeners(store.dispatch)