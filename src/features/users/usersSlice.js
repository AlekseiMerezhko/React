import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
    "users/fetchByIdStatus",
    async (userId, thunkAPI) => {
        const response = await fetch(`https://swaspi.dev/api/people/${userId}`);
        const parsedData = await response.json();
        return parsedData;
    }
);

// Then, handle actions in your reducers:
const usersSlice = createSlice({
    name: "users",
    initialState: { entities: [], loading: false, error: "" },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchUserById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                // Add user to the state array
                state.entities.push(action.payload);
                state.loading = false;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                console.log("action", action);
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
