import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'

import { employeeApi } from '../features/employees/EmployeesApi'

export const store = configureStore({
    reducer:{
        [employeeApi.reducerPath]:employeeApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        employeeApi.middleware,
    )
})

setupListeners(store.dispatch)