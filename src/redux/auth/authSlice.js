const { createSlice } = require("@reduxjs/toolkit");
const { register, login, logout, refresh } = require("./operations");

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
   },
   extraReducers: builder => {
      builder
      .addCase(register.fulfilled, (state, action)=>{
         state.user=action.payload.user;
         state.token=action.payload.token;
         state.isLoggedIn=true;
      })
      .addCase(login.fulfilled, (state, action)=>{
         state.user=action.payload.user;
         state.token=action.payload.token;
         state.isLoggedIn=true;
      })
      .addCase(logout.fulfilled, (state)=>{
         state.user=null;
         state.token=null;
         state.isLoggedIn=false;
      })
      .addCase(refresh.pending, state=>{
         state.isRefreshing=true;
      })
      .addCase(refresh.fulfilled, (state, action)=>{
         state.user=action.payload;
         state.isRefreshing=false;
         state.isLoggedIn=true;
      })
      .addCase(refresh.rejected, state=>{
         state.isRefreshing=false;
      })
   }
})

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
