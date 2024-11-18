import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
}

interface UserState {
  users: User[] | null;
  loading: boolean;
}

const initialState: UserState = {
  users: null,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state) {
      state.loading = false;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;
