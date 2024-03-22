import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi=createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8200/api/'}),
    tagTypes: ['Employees'],
    endpoints: (builder)=>({

        getEmployees:builder.query({
            query:()=> 'employee/fetchall',
            providesTags: ['Employees']
        }),

        getEmployee:builder.query({
            query:(Email_address)=> `employee/fetchByEmail/${Email_address}`,
            providesTags: ['Employees']
        }),

        addEmployee:builder.mutation({
            query:(employee)=>({
                url: 'employee/register',
                method:'POST',
                body: employee
            }),
            invalidatesTags:['Employees']
        }),

        authenticateEmployee:builder.mutation({
            query:(employee)=>({
                url: 'employee/loginEmployee',
                method:'POST',
                body: employee
            }),
            onSuccess: (response, variables, api) => {
                const { token, employee } = response;
                    storeToken(token);
                    storeUser(employee);
            },
            invalidatesTags:['Employees']
        }),

        ////////////////////////////////////
        updateEmployee:builder.mutation({
            query:(employee)=>({
                url: `employees/update/${user.UserID}`,
                method: 'PUT',
                body: employee
            }),
            invalidatesTags: ['Employees']
        }),

        updatePassword:builder.mutation({
            query:(user)=>({
                url: `users/update/${user.userID}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['Employees']
        }),


        deleteEmployee: builder.mutation({
            query:(Email_address)=>({
                url: `employee/deleteByEmail/${Email_address}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Employees']
        })
    })
})


export const {
    useGetEmployeesQuery,
    useGetEmployeeQuery,
    useAddEmployeeMutation,
    useAuthenticateEmployeeMutation,
    useDeleteEmployeeMutation
}=employeeApi