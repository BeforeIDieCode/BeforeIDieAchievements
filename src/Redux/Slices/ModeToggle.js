import { createSlice } from "@reduxjs/toolkit"




var initialState = {
    Toggle: 0 // 0 mean in dark mode - 1 mean in light mode
}


const ModeToggle = createSlice(
    {
        name: 'ModeToggle',
        initialState,
        reducers: {
            setToggle(state, action) {
                state.Toggle = (state.Toggle ^ 1);
            },

        }
    }

)


export const { setToggle } = ModeToggle.actions;

export const getToggle = (state) => {
    return state.ModeToggle.Toggle;
}




export default ModeToggle.reducer;