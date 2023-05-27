import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice'

import posts from './posts'
import auth from './auth'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        posts: posts,
        auth: auth
    }
})
