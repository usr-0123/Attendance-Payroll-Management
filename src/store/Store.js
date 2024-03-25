import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'

import { advanceApi } from '../features/advance/advanceApi'
import { deductionApi } from '../features/deduction/deductionApi'
import { employeeApi } from '../features/employees/employeesApi'
import { scheduleApi } from '../features/schedule/scheduleApi'
import { departmentApi } from '../features/department/departmentApi'
import { positionApi } from '../features/positions/positionsApi'
import { leaveApi } from '../features/leave/leaveApi'
import { overtimeApi } from '../features/overtime/overtimeApi'
import { payrollApi } from '../features/payroll/payrollApi'

export const store = configureStore({
    reducer:{
        [advanceApi.reducerPath]:advanceApi.reducer,
        [deductionApi.reducerPath]:deductionApi.reducer,
        [employeeApi.reducerPath]:employeeApi.reducer,
        [scheduleApi.reducerPath]:scheduleApi.reducer,
        [departmentApi.reducerPath]:departmentApi.reducer,
        [leaveApi.reducerPath]:leaveApi.reducer,
        [overtimeApi.reducerPath]:overtimeApi.reducer,
        [payrollApi.reducerPath]:payrollApi.reducer,
        [positionApi.reducerPath]:positionApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        employeeApi.middleware,
        scheduleApi.middleware,
        departmentApi.middleware,
        positionApi.middleware,
        leaveApi.middleware,
        deductionApi.middleware,
        advanceApi.middleware,
        overtimeApi.middleware,
        payrollApi.middleware,
    )
})

setupListeners(store.dispatch)