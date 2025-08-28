import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthUser {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
}
interface UserAuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  token: string | null;
}

const tokenFromStorage =
  typeof sessionStorage !== "undefined"
    ? sessionStorage.getItem("spacetrade_token")
    : null;

const isAuthenticated =
  typeof sessionStorage !== "undefined" &&
  sessionStorage.getItem("spacetrade_token")
    ? true
    : false;

const userFromStorage =
  typeof sessionStorage !== "undefined"
    ? JSON.parse(sessionStorage.getItem("user") || "null")
    : null;

const initialState: UserAuthState = {
  user: userFromStorage,
  isAuthenticated,
  token: (() => {
    if (tokenFromStorage) {
      return tokenFromStorage;
    } else {
      return null;
    }
  })(),
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      sessionStorage.setItem("spacetrade_user", JSON.stringify(state.user));
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("spacetrade_token", action.payload);
    },

    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      sessionStorage.removeItem("spacetrade_token");
      sessionStorage.removeItem("spacetrade_user");
    },

    resetAll: () => initialState,
  },
});

export const { addUser, logoutUser, setToken } = loginSlice.actions;

export default loginSlice.reducer;

export const authUser = (state: RootState): AuthUser | null => state.user.user;
export const isAuth = (state: RootState): boolean => state.user.isAuthenticated;
export const accessToken = (state: RootState): string | null =>
  state.user.token;
