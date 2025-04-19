// This file demonstrates typical usage of Redux Toolkit's createSlice function
// for defining reducer logic and actions, as well as related thunks and selectors.

import type { AppThunk, RootState } from '@/app/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCount } from './counterAPI'

// Define the TS type for the counter slice's state
export interface CounterState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

// Define the initial value for the slice state
const initialState: CounterState = {
    value: 0,
    status: 'idle',
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            // Handle the action types defined by the `incrementAsync` thunk defined below.
            // This lets the slice reducer update the state with request status and results.
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

// Export the generated action creators for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the slice reducer for use in the store configuration
export default counterSlice.reducer

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectCount = (state: RootState) => state.counter.value
export const selectStatus = (state: RootState) => state.counter.status

// The function below is called a thunk, which can contain both sync and async logic
// that has access to both `dispatch` and `getState`. They can be dispatched like
// a regular action: `dispatch(incrementIfOdd(10))`.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount: number): AppThunk => {
    return (dispatch, getState) => {
        const currentValue = selectCount(getState())
        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount))
        }
    }
}

// Thunks are commonly used for async logic like fetching data.
// The `createAsyncThunk` method is used to generate thunks that
// dispatch pending/fulfilled/rejected actions based on a promise.
// In this example, we make a mock async request and return the result.
// The `createSlice.extraReducers` field can handle these actions
// and update the state with the results.
export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount)
        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)
