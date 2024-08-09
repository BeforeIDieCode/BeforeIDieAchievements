import { configureStore } from "@reduxjs/toolkit";
import ModeToggle from "../Slices/ModeToggle";


const store = configureStore(
    {
        reducer: {
            ModeToggle: ModeToggle
        }
    }
)

export default store;