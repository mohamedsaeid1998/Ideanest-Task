import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginState {
  role: null;
  data: [];
  loading: boolean;
  errors: string | null;
  islogged:null
}
const initialState: LoginState = {
  role: null,
  data: [],
  loading: false,
  errors: null,
  islogged:null
};


const fetchData = createAsyncThunk("login/fetchData", async (userData) => {
  try {
    const response = await axios.post(`/api/v0/admin/users/login`, userData);
    localStorage.setItem("userRole", response.data.data.user.role);
    localStorage.setItem("authToken", response.data.data.token);
    localStorage.setItem("userId", response.data.data.user._id);
   
    return response.data.data.user.role;
  } catch (error) {
    console.log(error);
    
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    fetchDataIslogged: (state) => {
      state.islogged = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.role = action.payload;
      state.loading = false;
      state.islogged = action.payload
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      // state.errors = action.payload;
    });
  },
});

export const { fetchDataIslogged } = loginSlice.actions;

export { fetchData };
export default loginSlice.reducer;
